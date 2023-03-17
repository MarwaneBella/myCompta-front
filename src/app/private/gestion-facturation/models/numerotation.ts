import { ResetCounter } from "../enums/reset-counter";

export class Numerotation{
    id : number
    format :string
    minCounterSize: number
    resetCounter : ResetCounter;
    startCounterDevis: number
    startCounterFacture: number
    startCounterAvoir: number
    startCounterAcompte: number
}