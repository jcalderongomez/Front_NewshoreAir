import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Airport, IAirport } from '../../Interfaces/IAirport';
import { AirportService } from '../airport.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent {


  displayedColumns: string[] = ['id','name','iataCode','location'];
  dataSource = new MatTableDataSource<Airport>();


  constructor(private airportService: AirportService, private dialog: MatDialog){}
  

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
    this.airportService.getAirports().subscribe({
      next: (dataResponse: IAirport) => {
        this.dataSource.data = dataResponse.result;
        console.log(this.dataSource.data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  updateAirport(airport: Airport){}
  deleteAirport(airport: Airport){}

}