import { Locator } from "@playwright/test";
import { WaitForResults } from "../enums/wait-for-results.enum";
import { CalcBoolean } from "./calc-boolean.type";

export type ResultWithArray<STATE> = WaitForResults<Locator, CalcBoolean<STATE>>[] | WaitForResults<null, CalcBoolean<STATE>> | WaitForResults<Locator, CalcBoolean<STATE>>;
export type Result<STATE> =  WaitForResults<Locator, CalcBoolean<STATE>> | WaitForResults<null, CalcBoolean<STATE>>

export type WaitForResultType<LOCATOR extends Locator[] | Locator, STATE extends Required<Parameters<Locator["waitFor"]>>[0]["state"], WAIT_FOR_ALL extends boolean> = LOCATOR extends Array<Locator>
  ? WAIT_FOR_ALL extends true ? ResultWithArray<STATE> : WAIT_FOR_ALL extends false ?  Result<STATE> : never
  : LOCATOR extends Locator
  ? Result<STATE>
  : never;
