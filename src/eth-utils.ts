import _ from "lodash";
import { ethers } from "ethers";

import BytesLike = ethers.BytesLike;
import BigNumber = ethers.BigNumber;
const { keccak256, arrayify, hexlify } = ethers.utils;

export const xor = (xs: BytesLike, ys: BytesLike) =>
    _.zip(arrayify(xs), arrayify(ys))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(([x, y]) => x! ^ y!);

export const flip = (xs: BytesLike) =>
    arrayify(xs).map(x => ~x);

export const scoreSolution =
    (address: BytesLike, task: BytesLike, solution: BytesLike) =>
            BigNumber.from(flip(xor(keccak256(solution), xor(task, keccak256(address)))));

export const hexdotify = (x: BytesLike, blockSize = 4) => {
    const hex = hexlify(x);
    if (hex.length <= 2 + blockSize + 1 + blockSize) { return hex; }
    return `${hex.substring(0, 2 + blockSize)}…${hex.substring(hex.length - blockSize)}`;
}