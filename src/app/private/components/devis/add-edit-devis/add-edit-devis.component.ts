import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevisService } from 'src/app/private/http/devis.service';
import { Devis } from 'src/app/private/models/devis';
import { KeyWordFormComponent } from '../../../../shared/components/key-word-form/key-word-form.component';

@Component({
  selector: 'app-add-edit-devis',
  templateUrl: './add-edit-devis.component.html',
  styleUrls: ['./add-edit-devis.component.scss']
})
export class AddEditDevisComponent implements OnInit {

  // @ViewChild(AddressFormComponent)
  // childAddress: AddressFormComponent;

  // @ViewChild(PhoneFormComponent)
  // childPhone: PhoneFormComponent;

  @ViewChild(KeyWordFormComponent)
  childKeyWord: KeyWordFormComponent;

  // @ViewChild(SelectClientFormComponent)
  // childSelectClient: SelectClientFormComponent;

  id: number;
  slug: string;
  languages: string[] = ['Français', 'English'];
  defaultLang: string = 'Français';
  devis: Devis = new Devis();
  devisForm: FormGroup;
  isAddMode: boolean = true;
  isSelected : boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private devisService: DevisService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.initializeForms();

    if (this.route.snapshot.url[0].path == 'edit') {
      this.isAddMode = false;
      this.verifyRouteAndGetDevis();
    }
  }

  async verifyRouteAndGetDevis() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    this.id = +this.id;
    if (this.id) {
      this.devisService.getDevisById(this.id).subscribe({
        next: (data) => (this.devis = data),
        error: (err) => console.log(err),
        complete: () => {
          this.checkSlug();
          this.setFormValues();
          this.setOtherForms()
        },
      });
    } else {
      this.router.navigateByUrl('deviss');
    }
  }

  checkSlug() {
    if (this.devis.slug === this.slug) {
    } else {
      this.router.navigateByUrl(
        `deviss/edit/${this.id}-${this.devis.slug}`
      );
    }
  }

  initializeForms() {
    this.devisForm = this.formBuilder.group({
      name: [null, Validators.required],
      ntva: null,
      siren: null,
      codeNaf: null,
      website: null,
      language: [this.defaultLang, Validators.required],
    });
  }

  setOtherForms(){
    // if(this.devis.address) this.childAddress.setFormValues(this.devis.address)
    // if(this.devis.motCleList.length) this.childKeyWord.setFormValues(this.devis.motCleList)
    // if(this.devis.phoneList.length)this.childPhone.setFormValues(this.devis.phoneList)
    // if(this.devis.clientList.length) this.childSelectClient.setFormValues(this.devis.clientList)
  }

  onSubmit() {
    
    if (this.devisForm.valid) {
      this.getFormValues();

      if (this.isAddMode) {
        this.createNewDevis();
      } else {
        this.updateDevis();
      }
    } else {
      console.log('Invalid Form');
    }
  }

  createNewDevis() {
    this.devisService.addDevis(this.devis).subscribe({
      next: (data) => (this.devis = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
        
      },
    });
  }

  updateDevis(){
    this.devisService.updateDevisById(this.devis.id,this.devis).subscribe({
      next: (data) => (this.devis = data),
      error: (e) => console.log(e),
      complete: () => {
        this.submitOtherForms();
      },
    });
  }

  async submitOtherForms() {
    var devis : Devis = new Devis()
    devis.id = this.devis.id
    // await this.childAddress.onSubmit(devis,this.isAddMode);
    // await this.childKeyWord.onSubmit(devis,this.isAddMode);
    // await this.childPhone.onSubmit(devis,this.isAddMode);
    // await this.childSelectClient.onSubmit(devis,this.isAddMode);
    this.router.navigateByUrl('deviss');
  }

  getFormValues() {
    // this.devis.name = this.devisForm.controls['name'].value;
    // this.devis.ntva = this.devisForm.controls['ntva'].value;
    // this.devis.siren = this.devisForm.controls['siren'].value;
    // this.devis.codeNaf = this.devisForm.controls['codeNaf'].value;
    // this.devis.website = this.devisForm.controls['website'].value;
    // this.devis.language = this.devisForm.controls['language'].value;
  }

  setFormValues() {
    this.devisForm.patchValue({
      // name: this.devis.name,
      // ntva: this.devis.ntva,
      // siren: this.devis.siren,
      // codeNaf: this.devis.codeNaf,
      // website: this.devis.website,
      // language: this.devis.language,
    });
  }

}
