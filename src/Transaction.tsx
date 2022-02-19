import { ContractReceipt, ContractTransaction } from "ethers";
import { useEffect, useState } from "preact/hooks";
import { hexdotify } from "./eth-utils";
import { Hex } from "./Hex";
import { useFlashes } from "./react-utils/useFlashes";
import { Waiting } from "./react-utils/Waiting";
import { def } from "./utils";
import * as style from "./style";

type TransactionStatus =
    ["sent"]
    | ["pooled", ContractTransaction]
    | ["poolingFailed", unknown]
    | ["confirmed", ContractReceipt, ContractTransaction]
    | ["confirmationFailed", unknown, ContractTransaction];

export const useTransaction = (txFactory: () => Promise<ContractTransaction>, autoSend = false) => {
    const [state, setState] = useState([] as [status?: TransactionStatus, send?: () => void]);
    useEffect(() => {
        let cancelled = false;
        const send = async () => {
            if (cancelled) { return; }
            setState([["sent"]]);
            try {
                const tx = await txFactory();
                if (cancelled) { return; }
                setState([["pooled", tx]]);
                try {
                    const rcp = await tx.wait();
                    if (cancelled) { return; }
                    setState([["confirmed", rcp, tx]]);
                } catch (er) {
                    console.error(er);
                    if (cancelled) { return; }
                    setState([["confirmationFailed", er, tx], send]);
                    return;
                }
            } catch (er) {
                console.error(er);
                if (cancelled) { return; }
                setState([["poolingFailed", er], send]);
                return;
            }
        };
        if (autoSend) { 
            send(); 
        } else {
            setState([undefined, send]);
        }
        return () => cancelled = true;
    }, []);
    return state;
};

export function TransactionStatusRender({
    status,
}: {
    status: TransactionStatus,
}) {
    const renderError = (er: unknown): string => {
        if ("object" !== typeof er || er === null) { return JSON.stringify(er); }
        if ("error" in er) { return renderError((er as { error: unknown }).error); }
        if ("message" in er) {
            const { message } = (er as { message: unknown });
            if ("string" !== typeof message) { return JSON.stringify(message); }
            const match = message.match(/reverted with reason string '(.*)'/);
            if (!match) { return message; }
            return match[1];
        }
        return JSON.stringify(er);
    };
    switch (status[0]) {
        case "sent":
            return <>sending<Waiting /></>;
        case "pooled":
            return <>waiting confirmation<Waiting /> (tx <Hex bytes={status[1].hash} transform={hexdotify} />)</>;
        case "poolingFailed":
            return <>pooling failed: <span className={style.bad}>{renderError(status[1])}</span></>;
        case "confirmed":
            return <>confirmed (tx <Hex bytes={status[1].transactionHash} transform={hexdotify} />)</>
        case "confirmationFailed":
            return <>confirmation failed, {renderError(status[1])}</>;
    }
}


export function Transaction({
    title, actionTitle, status, onRetry: retry,
}: {
    title: string;
    actionTitle?: string;
    status: ReturnType<typeof useTransaction>[0];
    onRetry: ReturnType<typeof useTransaction>[1];
}) {
    return <>
        {status && <><span className={useFlashes([status])}>
            {title} <TransactionStatusRender status={status} />
        </span><br /></>}
        {retry && <><button onClick={retry}>
            {(def(status) ? "Retry " : "") + (actionTitle ?? title)}
        </button><br /></>}
    </>;
}
