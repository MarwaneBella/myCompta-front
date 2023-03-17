import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Devis } from 'src/app/private/gestion-facturation/models/devis';
import { Facture } from 'src/app/private/gestion-facturation/models/facture';

@Component({
  selector: 'app-text-field-form',
  templateUrl: './text-field-form.component.html',
  styleUrls: ['./text-field-form.component.scss']
})
export class TextFieldFormComponent implements OnInit {

  @Input()
  for : 'D'|'F'

  textForm :FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniatTextForm()
  }

  iniatTextForm(){
    this.textForm = this.formBuilder.group({
      textIntro :null,
      textCond : null,
      piedPage : null,
      condVente : null
    })
  }

  getTextForm(data : Devis |Facture) : Devis |Facture{
    if(this.for == 'D'){
      var devis : Devis  = data as Devis
      devis.textIntro = this.textForm.controls['textIntro'].value
      devis.textCond = this.textForm.controls['textCond'].value
      devis.piedPage = this.textForm.controls['piedPage'].value
      devis.condVente = this.textForm.controls['condVente'].value
    }
    return data
  }

  setTextForm(data : Devis | Facture) {
    if(this.for == 'D'){
      var devis : Devis = data as Devis
      this.textForm.controls['textIntro'].setValue(devis.textIntro)
      this.textForm.controls['textCond'].setValue(devis.textCond)
      this.textForm.controls['piedPage'].setValue(devis.piedPage)
      this.textForm.controls['condVente'].setValue(devis.condVente)
    }
  }
}
