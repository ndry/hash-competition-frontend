import { PerContract } from "./PerContract";


export function App() {
    const searchParams = new URLSearchParams(location.search);
    const contractAddress = searchParams.get("contract");
    if (!contractAddress) {
        return <div>
            <h1>No contract address specified!</h1>
            <div>Specify contract address in url like /?contract=0x0000000000000000000000000000000000000000</div>
        </div>
    }

    return <PerContract contractAddress={contractAddress} />
}
