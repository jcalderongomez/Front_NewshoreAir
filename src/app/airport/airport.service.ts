import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport, IAirport } from '../Interfaces/IAirport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Airport"

  resultados:  Airport[] = [];
  
  constructor(private http:HttpClient) { }

  getAirports():Observable<IAirport>
  {
    console.log("pasa");
    console.log(this.apiUrl);
    return this.http.get<IAirport>(`${this.apiUrl}`)
  }
  
}
