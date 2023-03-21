import { environment } from '../../../environments/environment.prod';
import { Departement } from "./departement"
import { Environment } from "./environment"

export class Personnel {

    id: number
    nom : string
    logo : string
    statsJur: string
    Description: string
    slug: string
    departementList : Departement[]
    environment: Environment


}
