import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteflightCreateComponent } from './routeflight-create/routeflight-create.component';
import { RouteflightDeleteComponent } from './routeflight-delete/routeflight-delete.component';
import { RouteflightUpdateComponent } from './routeflight-update/routeflight-update.component';
import { RouteflightListComponent } from './routeflight-list/routeflight-list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteflightRoutingModule } from './routeflight-routing.module';
import { RouteflightHomeComponent } from './routeflight-home/routeflight-home.component';



@NgModule({
  declarations: [
    RouteflightCreateComponent,
    RouteflightDeleteComponent,
    RouteflightUpdateComponent,
    RouteflightListComponent,
    RouteflightHomeComponent
  ],
  imports: [
    CommonModule,
    RouteflightRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RouteflightModule { }
