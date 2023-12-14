export type CalcBoolean<M> = M extends "hidden" ? false : M extends "detached" ? false : true;
