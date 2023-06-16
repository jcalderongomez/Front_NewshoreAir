import { Component, Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { FlightService } from '../flight.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-delete',
  templateUrl: './flight-delete.component.html',
  styleUrls: ['./flight-delete.component.css']
})
export class FlightDeleteComponent {
  nombre: string = '';
  id: number=0;
  opcionesMinisterio: any[]=[];
  
  selectedEstado= '';
  ministerioServicio: any;
  constructor(
              private dialogref: MatDialogRef<FlightDeleteComponent>,
              private flightService: FlightService,
              private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id:number
    }){
      
    }

    ngOnInit() {
      this.id     = this.data.id;
      //this.nombre = this.data.nombre;

    }
  

    deleteFlight(){
      this.dialogref.close();
      this.flightService.delete(this.id).subscribe({
        next:(data)=>{
          Swal.fire({
            icon: 'success',
            title: 'Deleted',
            showConfirmButton: true,
          });
        }
      })
      this.router.navigate(['../routeflight/list']);
      window.location.reload();
    }
}