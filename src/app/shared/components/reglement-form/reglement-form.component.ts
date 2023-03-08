import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom, forkJoin } from 'rxjs';
import { ConditionReglementService } from 'src/app/private/http/condition-reglement.service';
import { DevisService } from 'src/app/private/http/devis.service';
import { InteretService } from 'src/app/private/http/interet.service';
import { ModeReglementService } from 'src/app/private/http/mode-reglement.service';
import { ConditionReglement } from 'src/app/private/models/condition-reglement';
import { Devis } from 'src/app/private/models/devis';
import { Facture } from 'src/app/private/models/facture';
import { Interet } from 'src/app/private/models/interet';
import { ModeReglement } from 'src/app/private/models/mode-reglement';

@Component({
  selector: 'app-reglement-form',
  templateUrl: './reglement-form.component.html',
  styleUrls: ['./reglement-form.component.scss']
})
export class ReglementFormComponent implements OnInit {

  @Input()
  for : 'D' |'F'

  reglementForm :FormGroup
  phoneForm : FormGroup
  conditionsReglement : ConditionReglement[]
  modesReglement : ModeReglement[]
  interets : Interet[]

  constructor(
    private modeReglementService : ModeReglementService,
    private conditionReglementService : ConditionReglementService,
    private interetService : InteretService,
    private devisService : DevisService,
    private formBuilder : FormBuilder
  ) {}
  ngOnInit(): void {
    this.iniatReglementForm()
    this.setReglements()
  }

  

  iniatReglementForm() {
    this.reglementForm = this.formBuilder.group({
      conditionReglement : null,
      modeReglement :null,
      interet : null
    })
  }


  setReglements(){
      forkJoin({
        res1: this.modeReglementService.getModeReglementList(),
        res2 : this.conditionReglementService.getConditionReglementList(),
        res3 : this.interetService.getInteretList()
      })
      .subscribe({
        next : ({ res1 , res2 ,res3}) =>{
          this.modesReglement = res1
          this.conditionsReglement = res2
          this.interets = res3
        },
        error : e => console.log(e),
        complete : () =>{
          this.reglementForm.patchValue({
            conditionReglement : this.conditionsReglement[0],
            modeReglement :this.modesReglement[0],
            interet : this.interets[0]
          })
        } 
      })
  }

  getReglementForm(data : Devis |Facture) : Devis |Facture{
    if(this.for == 'D'){
      var devis : Devis  = data as Devis
      devis.conditionReglement = this.reglementForm.controls['conditionReglement'].value
      devis.modeReglement = this.reglementForm.controls['modeReglement'].value
      devis.interet = this.reglementForm.controls['interet'].value
    }
    return data
  }

  setReglementForm(data : Devis |Facture) {
    if(this.for == 'D'){
      var devis : Devis  = data as Devis
      this.reglementForm.controls['conditionReglement'].setValue(devis.conditionReglement)
      this.reglementForm.controls['modeReglement'].setValue(devis.modeReglement)
      this.reglementForm.controls['interet'].setValue(devis.interet)
    }
  }


  // onSubmit(data : Devis | Facture){
    
  //     if(this.for == 'D'){
  //       var devis : Devis = data as Devis
  //       devis.conditionReglement = this.reglementForm.controls['conditionReglement'].value
  //       devis.modeReglement = this.reglementForm.controls['modeReglement'].value
  //       devis.interet = this.reglementForm.controls['interet'].value
  //       this.updateDevis(devis)
  //     }

  //     if(this.for == 'F'){

  //     }
    
  // }

  // updateDevis(devis : Devis){
  //   this.devisService.updateDevisById(devis.id, devis).subscribe({
  //     error : e => console.log(e)
  //   })
  // }

  // updateFacture(){

  // }

}
