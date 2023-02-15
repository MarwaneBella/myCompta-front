import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Address } from 'src/app/private/models/address';
import { Client } from 'src/app/private/models/client';
import { Devis } from 'src/app/private/models/devis';
import { Facture } from 'src/app/private/models/facture';
import { MotCle } from 'src/app/private/models/mot-cle';
import { Phone } from 'src/app/private/models/phone';
import { Societe } from 'src/app/private/models/societe';
import { NavigateService } from 'src/app/private/services/navigate.service';

interface Card {
  mainIcon: string;
  primaryTitle: string;
  secondaryTitle: string;
  paragraph: string;
  line: boolean;
  secondaryData: { icon: string; data: string }[];
  keyWord: Array<String>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  data: Societe | Client | Devis | Facture;

  @Input()
  for: 'C' | 'S' | 'D' | 'F';

  card: Card = {} as Card;

  constructor(
    public navigate: NavigateService
  ) {}


  myArray = [];

  ngOnInit(): void {
    this.setCardData();
  }

  setCardData() {
    if (this.for == 'C') {
      this.getFromClient()
    } else if (this.for == 'S') {
      this.getFromSociete();
    }
  }

  getFromClient() {
    var client: Client = this.data as Client;
    this.card.secondaryData = [];
    this.card.primaryTitle = client.firstName + ' ' + client.lastName;
    this.card.line = false;
    this.card.paragraph = client.note
    if(client.societe){
      this.card.mainIcon = 'pro';
      this.card.secondaryTitle = "Professionel"
      this.setAddressToCard(client.societe.address)
    }else{
      this.card.mainIcon = 'par';
      this.card.secondaryTitle = "Particulier"
      this.setAddressToCard(client.address)
    }
    this.setMotCleToCard(client.motCleList);
    this.setEmailToCard(client.email)
    this.setPhoneToCard(client.phoneList)
    
  }

  getFromSociete() {
    var societe: Societe = this.data as Societe;
    this.card.secondaryData = [];
    this.card.mainIcon = 'societes';
    this.card.primaryTitle = societe.name;
    this.card.line = false;
    this.setMotCleToCard(societe.motCleList);
    this.setPhoneToCard(societe.phoneList)
    this.setAddressToCard(societe.address)
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


}
