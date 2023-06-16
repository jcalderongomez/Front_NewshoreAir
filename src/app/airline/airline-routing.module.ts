import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineCreateComponent } from './airline-create/airline-create.component';
import { AirlineHomeComponent } from './airline-home/airline-home.component';

const routes: Routes= [
  {
    path: '', component: AirlineHomeComponent, 
    children: [
      { path: 'list', component: AirlineListComponent },
      { path: 'create', component: AirlineCreateComponent },
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
export class AirlineRoutingModule { }
