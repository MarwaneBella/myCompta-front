import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropMenuPerComponent } from './components/drop-menu-per/drop-menu-per.component';



@NgModule({
  declarations: [
    DropMenuPerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DropMenuPerComponent,
    SharedModule
  ]
})
export class SharedPerModule { }
