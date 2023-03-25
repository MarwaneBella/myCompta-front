import { Employe } from './employe';
import { Departement } from './departement';
import { Chef } from './chef';
export class Service
{

  id: number
  nom: string
  chef: Chef
  departement : Departement
  employeList : Employe[]
}
