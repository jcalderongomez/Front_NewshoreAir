import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FlightDeleteComponent } from './flight-delete/flight-delete.component';
import { FlightUpdateComponent } from './flight-update/flight-update.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';
import { FlightRoutingModule } from './flight-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FlightCreateComponent,
    FlightDeleteComponent,
    FlightUpdateComponent,
    FlightListComponent,
    FlightHomeComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class FlightModule { }
