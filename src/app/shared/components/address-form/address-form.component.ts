import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Output() 
  formChange : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  formAddress : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formAddress = this.formBuilder.group({
      address : null,
    })

  }

  onChange(event : any){
    this.formChange.emit(this.formAddress);
  }

  doSomething(){
    console.log("nice")
  }

}
