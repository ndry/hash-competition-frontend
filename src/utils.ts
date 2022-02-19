
export const eqBy = <T, U>(fn: (x: T) => U) => (a: T, b: T) => fn(a) === fn(b);
export const eqByStringify = <T>() => eqBy(JSON.stringify as (x: T) => string);
export const def = <T>(x: T | undefined): x is T => typeof x !== "undefined";