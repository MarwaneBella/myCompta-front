import { SharedPerModule } from './../../shared-per/shared-per.module';
import { GestionPersonnelModule } from './../../gestion-personnel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { ShowDeptComponent } from './show-dept/show-dept.component';
import { SharedModule } from "../../../../shared/shared.module";
import { AddEditDeptModalComponent } from './add-edit-dept-modal/add-edit-dept-modal.component';


@NgModule({
    declarations: [
        DepartementComponent,
        ShowDeptComponent,
        AddEditDeptModalComponent,
    ],
    imports: [
        CommonModule,
        DepartementRoutingModule,
        SharedPerModule,
      ]
})
export class DepartementModule { }
