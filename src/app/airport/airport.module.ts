import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportCreateComponent } from './airport-create/airport-create.component';

import { AirportDeleteComponent } from './airport-delete/airport-delete.component';
import { AirportUpdateComponent } from './airport-update/airport-update.component';
import { AirportHomeComponent } from './airport-home/airport-home.component';
import { AirportRoutingModule } from './airport-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AirportListComponent } from './airport-list/airport-list.component';



@NgModule({
  declarations: [
    AirportCreateComponent,
    AirportListComponent,    
    AirportDeleteComponent,
    AirportUpdateComponent,
    AirportHomeComponent
  ],
  imports: [
    CommonModule,
    AirportRoutingModule,
    ReactiveFormsModule,
    MaterialModule
    

  ]
})
export class AirportModule { }
