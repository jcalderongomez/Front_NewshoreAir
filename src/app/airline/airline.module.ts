import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineCreateComponent } from './airline-create/airline-create.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineUpdateComponent } from './airline-update/airline-update.component';
import { AirlineDeleteComponent } from './airline-delete/airline-delete.component';
import { AirlineHomeComponent } from './airline-home/airline-home.component';
import { AirlineRoutingModule } from './airline-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AirlineCreateComponent,
    AirlineListComponent,
    AirlineUpdateComponent,
    AirlineDeleteComponent,
    AirlineHomeComponent
  ],
  imports: [
    CommonModule,
    AirlineRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AirlineModule { }
