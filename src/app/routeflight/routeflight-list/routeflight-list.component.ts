import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RouteflightUpdateComponent } from '../routeflight-update/routeflight-update.component';
import { RouteflightDeleteComponent } from '../routeflight-delete/routeflight-delete.component';
import { IRouteFlight, RouteFlight } from 'src/app/Interfaces/IRouteFlight';
import { RouteflightService } from '../routeflight.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-routeflight-list',
  templateUrl: './routeflight-list.component.html',
  styleUrls: ['./routeflight-list.component.css']
})
export class RouteflightListComponent {
  displayedColumns: string[] = ['id','routename','Acciones'];
  dataSource = new MatTableDataSource<RouteFlight>();

  constructor(private routeFlightService: RouteflightService, private dialog: MatDialog){}


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
      this.routeFlightService.getRouteFlights().subscribe({
        next: (dataResponse: IRouteFlight) => {
          this.dataSource.data = dataResponse.result;
          console.log(dataResponse.result);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  
  
    uptadeRouteFlight(routeFlight: RouteFlight){
      console.log(routeFlight);
      this.dialog.open(RouteflightUpdateComponent,{
        data: {
          name: routeFlight.routeName,
          id: routeFlight.id
        }
      });
    } 


    deleteRouteFlight (routeFlight: RouteFlight){
      console.log(routeFlight);
      this.dialog.open(RouteflightDeleteComponent,{
      data:{
        id: routeFlight.id,
        nombre: routeFlight.routeName
      }
    })
    }
  }
