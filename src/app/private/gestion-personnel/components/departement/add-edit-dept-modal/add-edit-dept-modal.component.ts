import { ModalService } from './../../../../../shared/services/modal.service';
import { Departement } from './../../../../models/departement';
import { DepartementService } from './../../../../http/departement.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-dept-modal',
  templateUrl: './add-edit-dept-modal.component.html',
  styleUrls: ['./add-edit-dept-modal.component.scss']
})
export class AddEditDeptModalComponent implements OnInit {


  deptForm: FormGroup
  id: number
  nom: string
  description: string
  designation: string
  departement = new Departement()

  @Input()
  isAddMode: boolean = true;


  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartementService,
    private router: Router,
    protected route : NavigateService,
    private modalService : ModalService
    ){}


  ngOnInit(): void {
    this.iniatForm();
  }


  iniatForm() {
    this.deptForm = this.formBuilder.group({
      nom: [null, Validators.required],
      designation: [null, Validators.required],
      description: null

    });
  }


  onSubmit() {
    if (this.deptForm.valid) {
          this.getFormValues();

          if (this.isAddMode) {
            this.createNewDept();
          } else {
            this.updateDept();
          }
        } else {
          console.log('Invalid Form');
        }
  }

  updateDept() {
    this.deptService.updateDepartementById(this.departement.id,this.departement).subscribe({
      next: (data) => (this.departement = data),
      error: (e) => console.log(e),
      // complete: () => {
      //   this.submitOtherForms();
      // },
    });

  }
  createNewDept() {
    console.log(this.departement)
    this.deptService.addDepartement(this.departement).subscribe({
      next: (data) => (this.departement = data),
      error: (e) => console.log(e),
      complete: () => {
        this.closeModal()

      },
    });



  }
  getFormValues() {
    this.departement.nom = this.deptForm.controls['nom'].value;
    this.departement.description = this.deptForm.controls['description'].value;
    this.departement.designation = this.deptForm.controls['designation'].value;
    //date

  }

  closeModal(){
    this.modalService.close()
    this.deptForm.reset()
    this.departement = new Departement()
  }


}
