import { Client } from "./client";
import { Societe } from "./societe";

export class Address {
  id: number
  address: string
  complementAddress : Array<string> 
  codePostal: string
  city: string
  country: string
  societe : Societe
  client : Client
}
