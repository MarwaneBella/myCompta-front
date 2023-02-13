import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormComponent } from 'src/app/private/components/address-form/address-form.component';
import { PhoneFormComponent } from '../../phone-form/phone-form.component';
import { KeyWordFormComponent } from '../../key-word-form/key-word-form.component';
import { SelectClientFormComponent } from '../../select-client-form/select-client-form.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from 'src/app/private/models/client';
import { ClientService } from 'src/app/private/http/client.service';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  @ViewChild(AddressFormComponent)
  childAddress: AddressFormComponent;

  @ViewChild(PhoneFormComponent)
  childPhone: PhoneFormComponent;

  @ViewChild(KeyWordFormComponent)
  childKeyWord: KeyWordFormComponent;

  @ViewChild(SelectClientFormComponent)
  childSelectClient: SelectClientFormComponent;

  id: number;
  slug: string;
  languages: string[] = ['Français', 'English'];
  defaultLang: string = 'Français';
  client: Client = new Client();
  clientForm: FormGroup;
  isAddMode: boolean = true;
  isParticulier : boolean ;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.initializeForms();

    if (this.route.snapshot.url[0].path == 'edit') {
      this.isAddMode = false;
      this.verifyRouteAndGetClient();
    }
  }

  async verifyRouteAndGetClient() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    this.id = +this.id;
    if (this.id) {
      this.clientService.getClientById(this.id).subscribe({
        next: (data) => (this.client = data),
        error: (err) => console.log(err),
        complete: () => {
          this.checkSlug();
          this.setFormValues();
          this.setOtherForms()
        },
      });
    } else {
      this.router.navigateByUrl('clients');
    }
  }

  checkSlug() {
    if (this.client.slug === this.slug) {
    } else {
      this.router.navigateByUrl(
        `clients/edit/${this.id}-${this.client.slug}`
      );
    }
  }

  initializeForms() {
    this.clientForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: null,
      email: null,
      function: null,
      website: null,
      language: [this.defaultLang, Validators.required]
    });
  }

  setOtherForms(){
    if(this.client.address) this.childAddress.setFormValues(this.client.address)
    if(this.client.motCleList.length) this.childKeyWord.setFormValues(this.client.motCleList)
    if(this.client.phoneList.length)this.childPhone.setFormValues(this.client.phoneList)
    // if(this.client.clientList.length) this.childSelectClient.setFormValues(this.client.clientList)
  }

  onSubmit() {
    
    if (this.clientForm.valid) {
      this.getFormValues();

      if (this.isAddMode) {
        this.createNewClient();
      } else {
        this.updateClient();
      }
    } else {
      console.log('Invalid Form');
    }
  }

  createNewClient() {
    this.clientService.addClient(this.client).subscribe({
      next: (data) => (this.client = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
        
      },
    });
  }

  updateClient(){
    this.clientService.updateClientById(this.client.id,this.client).subscribe({
      next: (data) => (this.client = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
      },
    });
  }

  async submitOtherForms() {
    var client : Client = new Client()
    client.id = this.client.id
    await this.childAddress.onSubmit(client,this.isAddMode);
    await this.childKeyWord.onSubmit(client,this.isAddMode);
    await this.childPhone.onSubmit(client,this.isAddMode);
    // await this.childSelectClient.onSubmit(client,this.isAddMode);
    this.router.navigateByUrl('clients');
  }

  getFormValues() {
    this.client.firstName = this.clientForm.controls['firstName'].value;
    this.client.lastName = this.clientForm.controls['lastName'].value;
    this.client.email = this.clientForm.controls['email'].value;
    this.client.function = this.clientForm.controls['function'].value;
    this.client.website = this.clientForm.controls['website'].value;
    this.client.language = this.clientForm.controls['language'].value;
  }

  setFormValues() {
    
    this.clientForm.patchValue({
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      email: this.client.email,
      function: this.client.function,
      website: this.client.website,
      language: this.client.language,
    });
  }

}
