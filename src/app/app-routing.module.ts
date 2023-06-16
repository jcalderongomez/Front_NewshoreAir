import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  
  { path: 'airline', 
  loadChildren: () => import('./airline/airline.module').then(m => m.AirlineModule)
  },
  { path: 'flight', 
  loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule)
  },
  { path: 'airport', 
  loadChildren: () => import('./airport/airport.module').then(m => m.AirportModule)
  },

  { path: 'routeflight', 
  loadChildren: () => import('./routeflight/routeflight.module').then(m => m.RouteflightModule)
  },

  { path:'**', redirectTo : '' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
