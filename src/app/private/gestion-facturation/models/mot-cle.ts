import { Client } from "./client"
import { Devis } from "./devis"
import { Facture } from "./facture"
import { Societe } from "./societe"

export class MotCle{
    id ?: number
    mot : string
    societe : Societe
    client : Client
    devis : Devis
    facture : Facture
}