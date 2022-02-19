import * as rx from "rxjs";
import { ethers, BytesLike } from "ethers";
import { scoreSolution } from "./eth-utils";

const { randomBytes } = ethers.utils;

//todo this is supposed to be run as worker
export class BackgroundSolver {
    constructor(
    ) {
        setInterval(this.iterate.bind(this), 50);
    }

    generateSolution = (address: BytesLike, task: BytesLike) => {
        const solution = randomBytes(32);
        const score = scoreSolution(address, task, solution);
        return { task, solution, score };
    }
    scoreSolution: ReturnType<typeof scoreSolution> | undefined;
    solution$ = new rx.Subject<ReturnType<typeof this.generateSolution>>();
    address?: BytesLike;
    task?: BytesLike;
    setTask(address: BytesLike, task: BytesLike) { 
        this.address = address;
        this.task = task;
    }
    iterate() {
        if (!this.address || !this.task) { return; }

        let best = this.generateSolution(this.address, this.task);
        for (let i = 0; i < 20; i++) {
            const solution = this.generateSolution(this.address, this.task);
            if (best.score.lt(solution.score)) { best = solution; }
        }
        this.solution$.next(best);
    }
}
