import { ethers } from "ethers";
import { HashCompetition__factory } from "@ndry/hash-competition-onchain/typechain-types/factories/HashCompetition__factory";

async function main() {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const hashCompetitionFactory = new HashCompetition__factory(provider.getSigner());
    const hashCompetition = await (await hashCompetitionFactory.deploy()).deployed();
    console.log("Deployed at address", hashCompetition.address);
}

main();
