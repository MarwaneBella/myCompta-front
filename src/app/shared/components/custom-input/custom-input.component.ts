import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  viewProviders:[{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CustomInputComponent implements OnInit {

  @Output()
  ngModelChange : EventEmitter<any> = new EventEmitter()


  control : FormControl
  @Input('control') set _control(value: AbstractControl<any,any> ){
    this.control = value as FormControl
  }

  @Input()
  color : 'white' | 'gray' = 'gray'

  @Input()
  placeholder : string

  @Input()
  type: 'text' | 'integer'| 'float'|'textarea'

  labelClass : string  = 'common-label-gray'
  inputClass : string = 'common-input-gray'
  textareaClass : string = 'common-textarea-gray'

  constructor() { }

  ngOnInit(): void {
    this.setClasses()
  }

  setClasses(){
    if(this.color == 'white'){
      this.labelClass = 'common-label-white'
      this.inputClass = 'common-input-white'
      this.textareaClass  = 'common-textarea-white'
    }
  }

  modelChanged( event : any){
    this.ngModelChange.emit(event)
  }

}
