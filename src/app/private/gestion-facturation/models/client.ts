import { Address } from "./address"
import { MotCle } from "./mot-cle"
import { Phone } from "./phone"
import { Societe } from "./societe"

export class Client {

    id: number
    slug: string
    firstName : string
    lastName : string
    email: string
    function: string
    website? : string
    language : string
    note : string
    societe? : Societe
    motCleList : MotCle[]
    phoneList : Phone[]
    address : Address
}