import * as rx from "rxjs";
import { ethers } from "ethers";
import { HashCompetition } from "@xplart/hash-competition-onchain/typechain-types/HashCompetition";
import { abi } from "@xplart/hash-competition-onchain/artifacts/contracts/HashCompetition.sol/HashCompetition.json";



export const provider = new ethers.providers.JsonRpcProvider();
export const block$ = (rx.fromEvent(provider, "block") as rx.Observable<number>)
    .pipe(rx.shareReplay(1));

export function createHashCompetitionContract(
    addressOrName: string,
    signerOrProvider?: ethers.Signer | ethers.providers.Provider
) {
    return new ethers.Contract(
        addressOrName,
        abi,
        signerOrProvider
    ) as HashCompetition;
}