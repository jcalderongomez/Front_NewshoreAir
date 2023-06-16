import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FlightService } from '../flight.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Flight, IFlight } from 'src/app/Interfaces/IFlight';
import { FlightDeleteComponent } from '../flight-delete/flight-delete.component';
import { FlightUpdateComponent } from '../flight-update/flight-update.component';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  displayedColumns: string[] = ['id','airportOriginId','airportDestineId','departureTime','arrivalTime','routeFlightId','routeName','Acciones'];
  dataSource = new MatTableDataSource<Flight>();

  constructor(private flightService: FlightService, private dialog: MatDialog){}


  ngOnInit():void{
    this.getResults();
  }
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  
    }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
  
    getResults() {
      this.flightService.getFlights().subscribe({
        next: (dataResponse: IFlight) => {
          this.dataSource.data = dataResponse.result;
          console.log(dataResponse.result);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  
  
    uptadeFlight(flight: Flight){
      console.log(flight);
      this.dialog.open(FlightUpdateComponent,{
        data: {
          name: flight,
          id: flight.id,
          airportOriginId:flight.airportOriginId ,
          airportDestineId:flight.airportDestineId,
          departureTime:flight.departureTime, 
          arrivalTime:flight.arrivalTime,    
          routeFlightId:flight.routeFlightId
        }
      });
    } 


    deleteFlight (flight: Flight){
      console.log(flight);
      this.dialog.open(FlightDeleteComponent,{
      data:{
        name: flight,
          id: flight.id,
          airportOriginId:flight.airportOriginId ,
          airportDestineId:flight.airportDestineId,
          departureTime:flight.departureTime, 
          arrivalTime:flight.arrivalTime,    
          routeFlightId:flight.routeFlightId
      }
    })
  }
}