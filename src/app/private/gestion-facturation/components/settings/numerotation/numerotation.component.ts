import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import { ResetCounter } from '../../../enums/reset-counter';
import { NumerotationService } from '../../../http/numerotation.service';
import { Numerotation } from '../../../models/numerotation';


interface ResetCounterSelect{
  label : string,
  value : ResetCounter
}

export function syntaxFormatValidator(translate : TranslateService): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;
      var validationMessage : { format : String } = {format : ""}

      if (!value)  return null;


      const hasCounter :boolean = /<cmp>/.test(value);
      const hasDocument :boolean = /<doc>|<[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+>/.test(value);
      const hasYear :boolean = /<aaaa>|<aa>/.test(value);

      
      if(!hasYear){
        translate.get('FORM.VALIDATION_MESSAGE.AA').subscribe( res => validationMessage.format = res )
        return validationMessage;
      }
      else if(!hasCounter){
        translate.get('FORM.VALIDATION_MESSAGE.CMP').subscribe( res => validationMessage.format = res )
        return validationMessage;
      }
      else if(!hasDocument){
        translate.get('FORM.VALIDATION_MESSAGE.DOC').subscribe( res => validationMessage.format = res )
        return validationMessage;
      }

      else return null
  }
}

@Component({
  selector: 'app-numerotation',
  templateUrl: './numerotation.component.html',
  styleUrls: ['./numerotation.component.scss']
})
export class NumerotationComponent implements OnInit {

  numerotationForm: FormGroup
  resetCounterSelectList : ResetCounterSelect[] = []
  numerotation : Numerotation 
  readonly maxMinCounterSize : number = 14
  isDoc : boolean = false;
  constructor(
    private formBuilder: FormBuilder, 
    private numerotationService : NumerotationService,
    private translate : TranslateService,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    this.initializeForm()
    this.setResetCounterSelectList()
    this.setNumerotation()
  }

  initializeForm() {
    this.numerotationForm = this.formBuilder.group({
      format : [null,[ Validators.required,syntaxFormatValidator(this.translate)]],
      minCounterSize : [null, [Validators.required,Validators.min(1), Validators.max(this.maxMinCounterSize)] ],
      resetCounter : [null, Validators.required],
      formatResult : { value : null , disabled : true},
      startCounterDevis : [null, [Validators.required,Validators.min(1), Validators.max(32000)] ],
      startCounterFacture : [null, [Validators.required, Validators.min(1), Validators.max(32000)] ],
      startCounterAvoir : [null, [Validators.required, Validators.min(1), Validators.max(32000)] ],
      startCounterAcompte : [null, [Validators.required, Validators.min(1), Validators.max(32000)] ]
    });
  }

  setResetCounterSelectList(){
    this.resetCounterSelectList = [...this.resetCounterSelectList,this.getResetCounterSelect(ResetCounter.MONTH)]
    this.resetCounterSelectList = [...this.resetCounterSelectList,this.getResetCounterSelect(ResetCounter.YEAR)]
    this.resetCounterSelectList = [...this.resetCounterSelectList,this.getResetCounterSelect(ResetCounter.NEVER)]
  }

  getResetCounterSelect(resetCounter: ResetCounter){
    var resetCounterSelect : ResetCounterSelect = {} as ResetCounterSelect
    resetCounterSelect.value = resetCounter
    if(resetCounter == ResetCounter.MONTH) this.translate.get('FORM.SELECT.M').subscribe( res => resetCounterSelect.label = res )
    if(resetCounter == ResetCounter.YEAR) this.translate.get('FORM.SELECT.Y').subscribe( res => resetCounterSelect.label = res )
    if(resetCounter == ResetCounter.NEVER) this.translate.get('FORM.SELECT.N').subscribe( res => resetCounterSelect.label = res )
    return resetCounterSelect;
  }

  comparWith(item : ResetCounterSelect , selected : ResetCounterSelect){
    
    return item.label == selected.label && item.value == selected.value 
  }



  setNumerotation(){
    this.numerotationService.getNumerotationById(1).subscribe({
      next : res => this.numerotation = res,
      error : e => console.log(e),
      complete : () => this.patchFormValues()
    })
  }

  patchFormValues(){
    this.numerotationForm.patchValue({
      minCounterSize : this.numerotation.minCounterSize,
      format : this.numerotation.format,
      resetCounter : this.getResetCounterSelect(this.numerotation.resetCounter),
      startCounterDevis : this.numerotation.startCounterDevis,
      startCounterFacture : this.numerotation.startCounterFacture,
      startCounterAvoir : this.numerotation.startCounterAvoir,
      startCounterAcompte : this.numerotation.startCounterAcompte,
      
    });
  }

  getFormValues(){
    this.numerotation.format = this.numerotationForm.controls['format'].value
    this.numerotation.minCounterSize = this.numerotationForm.controls['minCounterSize'].value
    this.numerotation.resetCounter = this.numerotationForm.controls['resetCounter'].value.value
    this.numerotation.startCounterDevis = this.numerotationForm.controls['startCounterDevis'].value
    this.numerotation.startCounterFacture = this.numerotationForm.controls['startCounterFacture'].value
    this.numerotation.startCounterAvoir = this.numerotationForm.controls['startCounterAvoir'].value
    this.numerotation.startCounterAcompte = this.numerotationForm.controls['startCounterAcompte'].value
  }

  onSave(){
    if(this.numerotationForm.valid){
      this.getFormValues()
      this.updateNumerotation()
    }
  }
  updateNumerotation() {
    this.numerotationService.updateNumerotationById(this.numerotation.id, this.numerotation).subscribe({
      next : res => console.log(res),
      error : e => console.log(e),
    })
  }

  setFormatResult(){

      var formatResult : string  = this.numerotationForm.controls['format'].value
      var minCounterSize : number
      var currentDate : Date = new Date();
      var fullDay  = this.decimalPipe.transform(currentDate.getDate() , '2.0')?.toString()
      var fullMonth = this.decimalPipe.transform(currentDate.getMonth()+1 , '2.0')?.toString()
      var fullYear = currentDate.getFullYear().toString()
      
      if(this.numerotationForm.controls['minCounterSize'].value){
        if(this.numerotationForm.controls['minCounterSize'].value > this.maxMinCounterSize)
          minCounterSize = this.maxMinCounterSize
        else minCounterSize = this.numerotationForm.controls['minCounterSize'].value
      }
      else
        minCounterSize = 0
      
      var cmp = '0'.repeat(minCounterSize-1)+'1'

      formatResult = formatResult?.replace( /<cmp>/g,cmp!)
      formatResult = formatResult?.replace( /<doc>/g,'F')
      formatResult = formatResult?.replace( /<aaaa>/g, fullYear )
      formatResult = formatResult?.replace( /<aa>/g, fullYear?.slice(2) )
      formatResult = formatResult?.replace( /<mm>/g, fullMonth! )
      formatResult = formatResult?.replace( /<m>/g, (currentDate.getMonth()+1).toString() )
      formatResult = formatResult?.replace( /<j>/g, currentDate.getDate().toString() )
      formatResult = formatResult?.replace( /<jj>/g, fullDay! )

      var regex = /<[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+>/g
      let array ;
      while ((array = regex.exec(formatResult)) !== null) {
        var fullDoc = array[0]?.split('<').pop()?.split('|')[0]
        formatResult = formatResult?.replace( /<[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+\|[a-zA-Z0-9]+>/g, fullDoc! )
      }
      this.numerotationForm.controls['formatResult'].setValue(formatResult)

  }

}
