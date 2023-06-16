import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Airline } from 'src/app/Interfaces/IAirline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline-create',
  templateUrl: './airline-create.component.html',
  styleUrls: ['./airline-create.component.css']
})
export class AirlineCreateComponent {
  airlineForm: FormGroup;
  airlines: Airline[] = [];


  constructor(private airlineServicio: AirlineService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.airlineForm = this.formBuilder.group({
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
