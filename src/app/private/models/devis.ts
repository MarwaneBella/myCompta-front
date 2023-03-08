import { Client } from "./client"
import { DevisStatus } from "../enums/devis-status"
import { Facture } from "./facture"
import { MotCle } from "./mot-cle"
import { Societe } from "./societe"
import { ConditionReglement } from "./condition-reglement"
import { ModeReglement } from "./mode-reglement"
import { Interet } from "./interet"
import { Article } from "./article"

export class Devis{
    id: number
    slug: string
    code :string
    validationDuration: number
    devise : string
    remise : number
    remIsPercentage : boolean
    textIntro :string
    textCond : string
    piedPage : string
    condVente : string
    totalHT : number
    totalTTC : number
    status : DevisStatus
    motCleList : MotCle[]
    societe : Societe | null
    client : Client | null
    
    conditionReglement: ConditionReglement
    modeReglement : ModeReglement
    interet : Interet
    articleList : Article[]
    // factureList : Facture[]

}