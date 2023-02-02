import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocieteService } from 'src/app/private/http/societe.service';
import { Societe } from 'src/app/private/models/societe';
import { AddressFormComponent } from 'src/app/shared/components/address-form/address-form.component';

@Component({
  selector: 'app-add-edit-societe',
  templateUrl: './add-edit-societe.component.html',
  styleUrls: ['./add-edit-societe.component.scss']
})
export class AddEditSocieteComponent implements OnInit , AfterViewInit {
  @ViewChild(AddressFormComponent) 
  childAddressForm : AddressFormComponent
   
  societe : Societe;
  societeForm : FormGroup;
  addressForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private societeService :SocieteService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.initializeForms();
  }


  initializeForms() {
    this.societeForm = this.formBuilder.group({
      name : [null, Validators.required],
      nTva : null,
      siren : null,
      codeNaf : null,
      website : null,
      Language : null,
    })
  }

  onSubmit(){
    console.log(this.societeForm.value );
    this.childAddressForm.doSomething()
  }

  formAddressChange(event:FormGroup){
    this.addressForm = event;
  }

}
