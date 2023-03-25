import { environment } from '../../../environments/environment.prod';
import { Departement } from "./departement"
import { Environment } from "./environment"

export class Personnel {

    id: number
    departementList : Departement[]
    environment: Environment


}
