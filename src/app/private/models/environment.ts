import { Personnel } from "./personnel"

export class Environment {

    id: number
    nom : string
    logo : string
    statsJur: string
    Description: string
    slug: string
    personnel? : Personnel
    filiales? : Environment[]


}
