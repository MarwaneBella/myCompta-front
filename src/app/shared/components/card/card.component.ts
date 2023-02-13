import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/private/models/client';
import { Devis } from 'src/app/private/models/devis';
import { Facture } from 'src/app/private/models/facture';
import { MotCle } from 'src/app/private/models/mot-cle';
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
    this.card.mainIcon = 'clients';
    this.card.primaryTitle = client.firstName + ' ' + client.lastName;
    this.card.secondaryTitle = "Particulier"
    this.card.line = false;
    this.setMotCleToCard(client.motCleList);
    this.card.secondaryData = [];

    if (client.phoneList.length) {
      this.card.secondaryData.push({
        icon: 'phone',
        data: client.phoneList[0].phoneNumber,
      });
    }
    if (client.email) {
      this.card.secondaryData.push({
        icon: 'email',
        data: client.email,
      });
    }
    if (client.address) {
      this.card.secondaryData.push({
        icon: 'map',
        data: client.address.city + ', ' + client.address.country,
      });
    }

    
  }

  getFromSociete() {
    var societe: Societe = this.data as Societe;
    this.card.mainIcon = 'societes';
    this.card.primaryTitle = societe.name;
    this.card.line = false;
    this.setMotCleToCard(societe.motCleList);
    this.card.secondaryData = [];
    if (societe.phoneList.length != 0) {
      this.card.secondaryData.push({
        icon: 'phone',
        data: societe.phoneList[0].phoneNumber,
      });
    }

    if (societe.address != null) {
      this.card.secondaryData.push({
        icon: 'map',
        data: societe.address.city + ', ' + societe.address.country,
      });
    }
  }

  setMotCleToCard(motCleList: MotCle[]) {
    if (motCleList.length != 0) {
      this.card.keyWord = [];
      motCleList.forEach((motCle) => {
        this.card.keyWord.push(motCle.mot);
      });
    }
  }
}
