import { FactureAvoir } from './../../../private/gestion-facturation/models/facture-avoir';
import { FactureSimple } from './../../../private/gestion-facturation/models/facture-simple';
import { FactureAcompte } from './../../../private/gestion-facturation/models/facture-acompte';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { DevisStatus } from 'src/app/private/gestion-facturation/enums/devis-status';
import { Address } from 'src/app/private/gestion-facturation/models/address';
import { Client } from 'src/app/private/gestion-facturation/models/client';
import { Devis } from 'src/app/private/gestion-facturation/models/devis';
import { Facture } from 'src/app/private/gestion-facturation/models/facture';
import { MotCle } from 'src/app/private/gestion-facturation/models/mot-cle';
import { Phone } from 'src/app/private/gestion-facturation/models/phone';
import { Societe } from 'src/app/private/gestion-facturation/models/societe';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { AlertifyService } from '../../services/alertify.service';
import { DatePipe, DecimalPipe } from '@angular/common';

interface Card {
  mainIcon: string;
  primaryTitle1: string;
  primaryTitle2: string;
  secondaryTitle: string;
  paragraph: string;
  line: boolean;
  secondaryData: { icon: string; data: string }[];
  primaryData: { icon: string; data1: string ; data2?: string}[];
  keyWord: Array<String>;

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Output()
  refreshListPage : EventEmitter<void> = new EventEmitter();

  @Input()
  data: Societe | Client | Devis | FactureSimple | FactureAvoir | FactureAcompte;

  @Input()
  for: 'C' | 'S' | 'D' | 'F'|'A'|'FA';

  card: Card = {} as Card;
  textColor: string = 'text-green'

  constructor(
    public navigate: NavigateService,
    private translate : TranslateService,
    private decimalPipe : DecimalPipe,
    private datePipe : DatePipe
  ) {}


  myArray = [];

  ngOnInit(): void {
    this.setCardData();
  }

  setCardData() {
    if (this.for == 'C') this.getFromClient()
    else if (this.for == 'S') this.getFromSociete();
    else if (this.for =='D') this.getFromDevis()
    else if (this.for =='F') this.getFromFactureSimple()
    else if (this.for =='A') this.getFromFactureAvoir()
    else if (this.for =='FA') this.getFromFactureAcompte()
  }

  getFromFactureAcompte() {
    var factureAcompte : FactureAcompte = this.data as FactureAcompte
    this.card.mainIcon = 'factures'
    this.card.primaryTitle1 = factureAcompte.code
    this.card.primaryTitle2 = factureAcompte.status
    this.setRecipientToCard(factureAcompte.devis.client , factureAcompte.devis.societe)
    this.setStatusToCard(factureAcompte.status);
    this.card.line = true
    this.card.primaryData = [];
    this.setHTAndTTC(factureAcompte.totalHT,factureAcompte.totalTTC);
    this.setDate(factureAcompte.date)
  }

  getFromFactureAvoir() {
    var factureAvoir : FactureAvoir = this.data as FactureAvoir
    this.card.mainIcon = 'factures'
    this.card.primaryTitle1 = factureAvoir.code
    this.card.primaryTitle2 = factureAvoir.status
    this.setRecipientToCard(factureAvoir.client , factureAvoir.societe)
    this.setStatusToCard(factureAvoir.status);
    this.card.line = true
    this.card.primaryData = [];
    this.setHTAndTTC(factureAvoir.totalHT,factureAvoir.totalTTC);
    this.setDate(factureAvoir.date)

  }

  getFromFactureSimple() {
    var factureSimple : FactureSimple = this.data as FactureSimple
    console.log(factureSimple)
    this.card.mainIcon = 'factures'
    this.card.primaryTitle1 = factureSimple.code
    this.card.primaryTitle1 = factureSimple.code
    this.card.primaryTitle2 = factureSimple.status
    this.setRecipientToCard(factureSimple.client , factureSimple.societe)
    this.setStatusToCard(factureSimple.status);
    this.card.line = true
    this.card.primaryData = [];
    this.setHTAndTTC(factureSimple.totalHT,factureSimple.totalTTC);
    this.setDate(factureSimple.date)
  }

  async getFromClient() {
    var client: Client = this.data as Client;
    this.card.secondaryData = [];
    this.card.primaryTitle1 = client.firstName + ' ' + client.lastName;
    this.card.line = false;
    this.card.paragraph = client.note
    if(client.societe){
      this.card.mainIcon = 'pro';
      this.card.secondaryTitle = await firstValueFrom(this.translate.get('CLIENT_CARD.TYPE.PRO.L1')).catch(console.log)
      this.setAddressToCard(client.societe.address)
    }else{
      this.card.mainIcon = 'par';
      this.card.secondaryTitle = await firstValueFrom(this.translate.get('CLIENT_CARD.TYPE.PAR.L1')).catch(console.log)
      this.setAddressToCard(client.address)
    }
    this.setMotCleToCard(client.motCleList);
    this.setEmailToCard(client.email)
    this.setPhoneToCard(client.phoneList)

  }

  async getFromSociete() {
    var societe: Societe = this.data as Societe;
    this.card.secondaryData = [];
    this.card.mainIcon = 'societes';
    this.card.primaryTitle1 = societe.name

    if(societe.clientList && societe.clientList.length)
    this.card.secondaryTitle = societe.clientList.length +' '+ await firstValueFrom(this.translate.get('TITLE.C')).catch(console.log)
    else
    this.card.secondaryTitle = 0 +' '+ await firstValueFrom(this.translate.get('TITLE.C')).catch(console.log)

    this.card.line = false;
    this.setMotCleToCard(societe.motCleList);
    this.setPhoneToCard(societe.phoneList)
    this.setAddressToCard(societe.address)
  }

  async getFromDevis() {
    var devi: Devis = this.data as Devis;
    this.card.mainIcon = 'devis';
    this.card.primaryTitle1 = devi.code
    this.setRecipientToCard(devi.client, devi.societe)
    this.card.line = true;
    this.setMotCleToCard(devi.motCleList);
    await this.setStatusToCard(devi.status);
    this.card.primaryData = [];
    this.setHTAndTTC(devi.totalHT,devi.totalTTC);
    this.setDate(devi.date)

  }

  setDate(date : Date ){
    this.card.primaryData.push({
      icon: 'time',
      data1: this.datePipe.transform(date,'hh : mm : ss')!
    })

    this.card.primaryData.push({
      icon: 'date',
      data1: this.datePipe.transform(date,'dd MMMM y')!,
    })
  }

  setHTAndTTC(ht:number , ttc : number){
    this.card.primaryData.push({
      icon: 'money',
      data1: this.decimalPipe.transform(ht, '.2-2')!+ ' HT',
      data2: this.decimalPipe.transform(ttc , '.2-2')!+ ' TTC'
    })
  }

  setMotCleToCard(motCleList: MotCle[]) {
    if (motCleList.length != 0) {
      this.card.keyWord = [];
      motCleList.forEach((motCle) => {
        this.card.keyWord.push(motCle.mot);
      });
    }
  }

  setAddressToCard(address:Address){
    if (address) {
      var data: string
      if(address.city && !address.country) data = address.city
      else if(!address.city && address.country) data = address.country
      else if(address.city && address.country)  data = address.city+', '+address.country
      else return
      this.card.secondaryData.push({
        icon: 'map',
        data: data,
      });
    }
  }

  setPhoneToCard(phoneList :Phone[]){
    if (phoneList.length) {
      this.card.secondaryData.push({
        icon: 'phone',
        data: phoneList[0].phoneNumber,
      });
    }
  }

  setEmailToCard(email : string){
    if (email) {
      this.card.secondaryData.push({
        icon: 'email',
        data: email,
      });
    }
  }

  async setRecipientToCard(client : Client |null , societe: Societe | null){
    if(client || societe){
      if(client && !societe){
        this.card.secondaryTitle =  await firstValueFrom(this.translate.get('DATA_NAME.C')) +
        ': ' + client.firstName + ' '+ client.lastName
      }

      if(societe && !client){
        this.card.secondaryTitle =  await firstValueFrom(this.translate.get('DATA_NAME.S')) +
        ': ' + societe.name
      }

    }
    else{
      this.card.secondaryTitle =  await firstValueFrom(this.translate.get('STATUS.NOT_DESTINED'))
    }
  }

  async setStatusToCard(status : string) {
    if(status == "PROVISIONAL"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.PROVISIONAL'))
      this.textColor = 'text-gray-4'
    }
    else if(status == "FINALIZED"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.FINALIZED'))
      this.textColor = 'text-blue'
    }
    else if(status == "SIGNED"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.SIGNED'))
      this.textColor = 'text-green'
    }
    else if(status == "REFUSED"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.REFUSED'))
      this.textColor = 'text-red'
    }
    else if(status == "PAYED"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.PAYED'))
      this.textColor = 'text-green'
    }
    else if(status == "REFUNDED"){
      this.card.primaryTitle2 =  await firstValueFrom(this.translate.get('STATUS.REFUNDED'))
      this.textColor = 'text-green'
    }

  }

}
