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
  placeholder : string

  @Input()
  type: 'text' | 'integer'| 'float'

  constructor() { }

  ngOnInit(): void {
  }

  modelChanged( event : any){
    this.ngModelChange.emit(event)
  }

}
