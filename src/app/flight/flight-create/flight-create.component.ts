import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from 'src/app/Interfaces/IFlight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent {
  flightForm: FormGroup;
  flights: Flight[] = [];


  constructor(private flightService: FlightService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.flightForm = this.formBuilder.group({
        Nombre: new FormControl('', Validators.required),
        Nit: new FormControl('', Validators.required),
        Estado: new FormControl('', Validators.required),
        MinisterioId: new FormControl('',Validators.required),
      });
    }
    ngOnInit() {
//      this.getMinisterios();
    }
   
  //   getMinisterios() {
  //     this.ministerioServicio.getMinisterios().subscribe(data => {
  //       this.opciones = data.result; // Asigna los datos obtenidos a la variable opciones
  //       console.log(this.opciones);
  //     });
  //   }
  
    onSubmit(){
    //   console.log(this.empresaForm.value);
    //   this.empresaServicio.add(this.empresaForm.value).subscribe((data:any)=> {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Empresa creada con éxito',
    //       showConfirmButton: true
    //     })
    //     this.router.navigate(['../empresa/listar'])
    //   })
    // }
  }
   
  
}
