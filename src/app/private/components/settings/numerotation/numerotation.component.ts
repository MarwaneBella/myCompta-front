import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-numerotation',
  templateUrl: './numerotation.component.html',
  styleUrls: ['./numerotation.component.scss']
})
export class NumerotationComponent implements OnInit {

  numerotationForm: FormGroup

  resertCounterList : string[] =  ['Tous les mois','Tous les ans','Jamais']

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.numerotationForm = this.formBuilder.group({
      format : [null, Validators.required],
      minCounterSize : [null, Validators.required],
      resertCounter : [null, Validators.required],
      formatResult : { value : null , disabled : true} ,
      startCounterDevis : [null, Validators.required],
      startCounterFacture : [null, Validators.required],
      startCounterAvoir : [null, Validators.required],
      startCounterAcompte : [null, Validators.required]
    });
  }

  onSave(){

  }

}
