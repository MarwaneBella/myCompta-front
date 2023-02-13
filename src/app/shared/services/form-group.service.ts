import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  constructor() { }

  trimFormValues(formGroup :FormGroup){
    Object.keys(formGroup.controls).forEach(key =>{
      if(formGroup.controls[key].value != null){
        formGroup.controls[key].setValue( formGroup.controls[key].value.trim() )
      }
    })
    return formGroup
  }

  checkForm(formGroup :FormGroup): boolean {
    var isBlank = false
    Object.keys(formGroup.controls).forEach(key =>{
      if(formGroup.controls[key].value != null){
        
        formGroup.controls[key].setValue( formGroup.controls[key].value.trim() )
        if( formGroup.controls[key].value != "" ){
          isBlank = true
        }
      }
    })
    return isBlank;
  }

  checkOneControl(control : string) : boolean{
    var mar = " djdjd" 
    var isBlank = false
    if(control != null){

      control = control.trim()
      if( control != "" ){
        isBlank = true
      }
    }
    return isBlank
  }
}
