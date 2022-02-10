import { ethers } from "ethers";
import { useEffect, useState } from "preact/hooks";
import { HashCompetition } from "@xplart/pow-onchain/typechain-types/HashCompetition";


const readBlocks = (async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const blockNumber = await provider.getBlockNumber();
    const blocks = await Promise.all(Array.from(
        {length: Math.min(blockNumber + 1, 10)}, 
        (_, i) => provider.getBlock(blockNumber - i)));
    return blocks.map(b => <div>{b.hash}</div>);
});

export function App(props: { name: string }) {
    const [x, setX] = useState(undefined as any | undefined);

    useEffect(() => {
        readBlocks().then(setX);
    }, []); 

    return <div>
        <h1>Hello {props.name}!</h1>
        <button onClick={() => readBlocks().then(setX)}>Read blocks</button>
        <p>Last blocks: {x}</p>
    </div>;
}