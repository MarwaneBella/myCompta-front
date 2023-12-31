import { FactureAcompteStatus } from './../enums/facture-acompte-status';
import { CompteBanc } from './compte-banc';
import { Devis } from './devis';
import { Facture } from './facture';

export class FactureAcompte extends Facture{
  montantPayed : number
  status : FactureAcompteStatus
  compteBanc : CompteBanc
  devis : Devis
}
