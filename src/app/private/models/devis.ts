import { Client } from "./client"
import { DevisStatus } from "./enums/devis-status"
import { Facture } from "./facture"
import { MotCle } from "./mot-cle"
import { Societe } from "./societe"

export class Devis{
    id: number
    slug: string
    code :string
    validationDuration: Date
    devise : string
    remise : number
    typeRemise : string
    textIntro :string
    textCond : string
    piedPage : string
    condVente : string
    status : DevisStatus
    motCleList : MotCle[]
    societe : Societe
    client : Client
    
    // conditionReglement: ConditionReglement
    // modeReglement : ModeReglement
    // interet : Interet
    // articleList : Article[]
    // factureList : Facture[]


}