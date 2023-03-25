import { GestionPersonnelRoutingModule } from "../gestion-personnel/gestion-personnel-routing.module"
import { Personnel } from "./personnel"

export class Environment {

    id: number
    nom : string
    logo : string
    statsJur: string
    Description: string
    slug: string
    personnel? : number
    filiales? : Environment[]


}
