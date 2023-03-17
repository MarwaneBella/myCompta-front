import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from './devis.component';
import { AddEditDevisComponent } from './add-edit-devis/add-edit-devis.component';
import { ShowDevisComponent } from './show-devis/show-devis.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateModule } from 'src/app/private/private.module';


@NgModule({
    declarations: [
        DevisComponent,
        AddEditDevisComponent,
        ShowDevisComponent
    ],
    imports: [
        CommonModule,
        DevisRoutingModule,
        SharedModule,
    ]
})
export class DevisModule { }
