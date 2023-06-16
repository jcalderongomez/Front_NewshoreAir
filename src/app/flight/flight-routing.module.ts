import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FlightUpdateComponent } from './flight-update/flight-update.component';
import { FlightDeleteComponent } from './flight-delete/flight-delete.component';
import { FlightHomeComponent } from './flight-home/flight-home.component';

const routes: Routes= [
  {
    path: '', component: FlightHomeComponent, 
    children: [
      { path: 'list', component: FlightListComponent},
      { path: 'create', component: FlightCreateComponent },
      { path: 'update/:id', component: FlightUpdateComponent },
      { path: 'delete/:id', component: FlightDeleteComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlightRoutingModule { }
