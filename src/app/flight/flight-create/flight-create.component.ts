import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from 'src/app/Interfaces/IFlight';

import { Route, Router } from '@angular/router';
import { AirportService } from 'src/app/airport/airport.service';
import { FlightService } from '../flight.service';
import { RouteflightService } from 'src/app/routeflight/routeflight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})



export class FlightCreateComponent {

  optionsAirports: any[]=[];
  optionsRoutes: any []=[]
  formFlights: FormGroup;
  selectedDeparture= '';
  selectedArrival='';
  selectedRoute='';
  


  constructor(private flightService: FlightService,
    private airportService: AirportService,
    private routeSerivce: RouteflightService,
            private formBuilder: FormBuilder,
            private route: Router){
    this.formFlights= this.formBuilder.group({
      AirportOriginId: new FormControl(),
      AirportDestineId: new FormControl(),
      DepartureTime: new FormControl(),
      ArrivalTime: new FormControl(),
      RouteFlightId: new FormControl()
    })
  }

  ngOnInit(){
    this.getAirports();
    this.getRoutes();
  }
  
  getAirports(){
    this.airportService.getAirports().subscribe(data => {
      this.optionsAirports = data.result;
      console.log( data.result);
    })
  }

  getRoutes(){
    this.routeSerivce.getRouteFlights().subscribe(data => {
      this.optionsRoutes = data.result;
      console.log( data.result);
    })
  }

  onSubmit(){
    console.log(this.formFlights.value);
    this.flightService.add(this.formFlights.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Flight created',
        showConfirmButton: true
      })
      this.route.navigate(['../routeflight/list'])
    })
  }
}

