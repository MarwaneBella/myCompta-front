import { Client } from "./client";
import { Societe } from "./societe";

export class Phone {
  id: number 
  phoneNumber: string
  societe: Societe
  client : Client
}
