import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineDeleteComponent } from '../airline/airline-delete/airline-delete.component';
import { AirportUpdateComponent } from './airport-update/airport-update.component';
import { AirportCreateComponent } from './airport-create/airport-create.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AirportHomeComponent } from './airport-home/airport-home.component';

const routes: Routes= [
  {
    path: '', component: AirportHomeComponent, 
    children: [
      { path: 'list', component: AirportListComponent },
      { path: 'create', component: AirportCreateComponent },
      { path: 'update/:id', component: AirportUpdateComponent },
      { path: 'delete/:id', component: AirlineDeleteComponent },
      { path: '**', redirectTo: 'list' },
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
export class AirportRoutingModule { }
