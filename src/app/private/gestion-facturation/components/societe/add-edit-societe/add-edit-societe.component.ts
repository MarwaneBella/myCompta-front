import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormComponent } from 'src/app/shared/components/address-form/address-form.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PhoneFormComponent } from 'src/app/shared/components/phone-form/phone-form.component';
import { KeyWordFormComponent } from 'src/app/shared/components/key-word-form/key-word-form.component';
import { SelectClientFormComponent } from 'src/app/shared/components/select-client-form/select-client-form.component';
import { Societe } from '../../../models/societe';
import { SocieteService } from '../../../http/societe.service';

@Component({
  selector: 'app-add-edit-societe',
  templateUrl: './add-edit-societe.component.html',
  styleUrls: ['./add-edit-societe.component.scss'],
})
export class AddEditSocieteComponent implements OnInit {
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
  societe: Societe = new Societe();
  societeForm: FormGroup;
  isAddMode: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private societeService: SocieteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.initializeForms();

    if (this.route.snapshot.url[0].path == 'edit') {
      this.isAddMode = false;
      this.verifyRouteAndGetSociete();
    }
  }

  async verifyRouteAndGetSociete() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    this.id = +this.id;
    if (this.id) {
      this.societeService.getSocieteById(this.id).subscribe({
        next: (data) => (this.societe = data),
        error: (err) => console.log(err),
        complete: () => {
          this.checkSlug();
          this.setFormValues();
          this.setOtherForms()
        },
      });
    } else {
      this.router.navigateByUrl('societes');
    }
  }

  checkSlug() {
    if (this.societe.slug === this.slug) {
    } else {
      this.router.navigateByUrl(
        `societes/edit/${this.id}-${this.societe.slug}`
      );
    }
  }

  initializeForms() {
    this.societeForm = this.formBuilder.group({
      name: [null, Validators.required],
      ntva: null,
      siren: null,
      codeNaf: null,
      website: null,
      language: [this.defaultLang, Validators.required],
    });
  }

  setOtherForms(){
    if(this.societe.address) this.childAddress.setFormValues(this.societe.address)
    if(this.societe.motCleList.length) this.childKeyWord.setFormValues(this.societe.motCleList)
    if(this.societe.phoneList.length)this.childPhone.setFormValues(this.societe.phoneList)
    if(this.societe.clientList.length) this.childSelectClient.setFormValues(this.societe.clientList)
  }

  onSubmit() {
    
    if (this.societeForm.valid) {
      this.getFormValues();

      if (this.isAddMode) {
        this.createNewSociete();
      } else {
        this.updateSociete();
      }
    } else {
      console.log('Invalid Form');
    }
  }

  createNewSociete() {
    this.societeService.addSociete(this.societe).subscribe({
      next: (data) => (this.societe = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
        
      },
    });
  }

  updateSociete(){
    this.societeService.updateSocieteById(this.societe.id,this.societe).subscribe({
      next: (data) => (this.societe = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
      },
    });
  }

  async submitOtherForms() {
    var societe : Societe = new Societe()
    societe.id = this.societe.id
    await this.childAddress.onSubmit(societe,this.isAddMode);
    await this.childKeyWord.onSubmit(societe,this.isAddMode);
    await this.childPhone.onSubmit(societe,this.isAddMode);
    await this.childSelectClient.onSubmit(societe,this.isAddMode);
    this.router.navigateByUrl('societes');
  }

  getFormValues() {
    this.societe.name = this.societeForm.controls['name'].value;
    this.societe.ntva = this.societeForm.controls['ntva'].value;
    this.societe.siren = this.societeForm.controls['siren'].value;
    this.societe.codeNaf = this.societeForm.controls['codeNaf'].value;
    this.societe.website = this.societeForm.controls['website'].value;
    this.societe.language = this.societeForm.controls['language'].value;
  }

  setFormValues() {
    this.societeForm.patchValue({
      name: this.societe.name,
      ntva: this.societe.ntva,
      siren: this.societe.siren,
      codeNaf: this.societe.codeNaf,
      website: this.societe.website,
      language: this.societe.language,
    });
  }
}
