import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteflightListComponent } from './routeflight-list/routeflight-list.component';
import { RouteflightDeleteComponent } from './routeflight-delete/routeflight-delete.component';
import { RouteflightUpdateComponent } from './routeflight-update/routeflight-update.component';
import { RouteflightCreateComponent } from './routeflight-create/routeflight-create.component';

const routes: Routes= [
  {
    path: '', component: RouteflightListComponent, 
    children: [
      { path: 'list', component: RouteflightListComponent },
      { path: 'create', component: RouteflightCreateComponent },
      { path: 'update/:id', component: RouteflightUpdateComponent },
      { path: 'delete/:id', component: RouteflightDeleteComponent },
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
export class RouteflightRoutingModule { }
