import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFormComponent } from 'src/app/shared/components/address-form/address-form.component';
import { KeyWordFormComponent } from '../../../../shared/components/key-word-form/key-word-form.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from 'src/app/private/models/client';
import { ClientService } from 'src/app/private/http/client.service';
import { SocieteService } from 'src/app/private/http/societe.service';
import { Societe } from 'src/app/private/models/societe';
import { firstValueFrom } from 'rxjs';
import { PhoneFormComponent } from '../../../../shared/components/phone-form/phone-form.component';
import { AddressService } from 'src/app/private/http/address.service';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit{

  @ViewChild(AddressFormComponent)
  childAddress: AddressFormComponent;

  @ViewChild(PhoneFormComponent)
  childPhone:PhoneFormComponent;

  @ViewChild(KeyWordFormComponent)
  childKeyWord: KeyWordFormComponent;

  id: number;
  slug: string;
  languages: string[] = ['Français', 'English'];
  defaultLang: string = 'Français';
  client: Client = new Client();
  societes: Array<Societe> = new Array<Societe>();
  clientForm: FormGroup;
  isAddMode: boolean = true;
  isPar : boolean ;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private societeService :SocieteService,
    private addressService :AddressService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  

  async ngOnInit(): Promise<void> {

    if (this.route.snapshot.url[0].path == 'edit') {
      this.isAddMode = false;
      this.verifyRouteAndGetClient();
    }
    this.initializeForms();
  }
  


  async verifyRouteAndGetClient() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split('-');
    this.id = +this.id;
    if (this.id) {
      this.clientService.getClientById(this.id).subscribe({
        next: (data) => (this.client = data),
        error: (err) => console.log(err),
        complete: () => {

          this.checkSlug();          
          if(this.client.societe) this.toProfessionel()
          else this.toParticulier();
          this.setFormValues();
          this.setOtherForms()
        },
      });
      
    } else {
      this.router.navigateByUrl('clients');
    }
  }

  checkSlug() {
    if (this.client.slug != this.slug)
      this.router.navigateByUrl(
        `clients/edit/${this.id}-${this.client.slug}`
      );
    
  }

  initializeForms() {
    this.clientForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: null,
      function: null,
      language: [this.defaultLang, Validators.required],
      note: null
    });
  }

  toParticulier(){
    this.isPar = true;
    if(this.clientForm.controls['societe']){
      this.clientForm.removeControl('societe')
    }
    if(!this.clientForm.controls['website']){
      this.clientForm.addControl('website' ,new FormControl(null))
    }
    if(!this.isAddMode) {
      this.setOtherForms() 
    }
  }

  toProfessionel(){
    this.isPar = false;
    if(!this.clientForm.controls['societe']){
      this.clientForm.addControl('societe' ,new FormControl( null,Validators.required))
      if(!this.societes.length){
        this.setSocietes();
      }
    }
    if(this.clientForm.controls['website']){
      this.clientForm.removeControl('website')
    }

    if(!this.isAddMode){
      this.setFormValues()
      this.setOtherForms()
    }
  }

  setSocietes(){
    this.societeService.getAllSocietes().subscribe({
      next : res => this.societes = res,
      error : e => console.log(e),
    })
  }

  setOtherForms(){
    setTimeout(() => {
      if(this.isPar && this.client.address) this.childAddress.setFormValues(this.client.address)
      if(this.client.motCleList.length) this.childKeyWord.setFormValues(this.client.motCleList)
      if(this.client.phoneList.length)this.childPhone.setFormValues(this.client.phoneList)
    }, 1);
    
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
    if(this.isPar) await this.childAddress.onSubmit(client,this.isAddMode);
    else this.deleteAddress();
    await this.childKeyWord.onSubmit(client,this.isAddMode);
    await this.childPhone.onSubmit(client,this.isAddMode);
    this.router.navigateByUrl('clients');
  }

  getFormValues() {
    this.client.firstName = this.clientForm.controls['firstName'].value;
    this.client.lastName = this.clientForm.controls['lastName'].value;
    this.client.email = this.clientForm.controls['email'].value;
    this.client.function = this.clientForm.controls['function'].value;
    this.client.language = this.clientForm.controls['language'].value;
    this.client.note = this.clientForm.controls['note'].value;
    if(this.isPar){
      this.client.website = this.clientForm.controls['website'].value
      delete this.client.societe
    }
    else{
      this.client.societe = this.clientForm.controls['societe'].value;
      delete this.client.website ;
    } 
  }

  setFormValues() {
    this.clientForm.patchValue({
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      email: this.client.email,
      function: this.client.function,
      language: this.client.language,
      note: this.client.note,
    });

    if(this.isPar) this.clientForm.controls['website'].setValue(this.client.website)
    else this.clientForm.controls['societe'].setValue(this.client.societe)
  }

  deleteAddress(){
    if(this.client.address && this.client.address.id){
      this.addressService.deleteAddressById(this.client.address.id).subscribe({
        error : e=> console.log(e)
      })
    }
  }

}
