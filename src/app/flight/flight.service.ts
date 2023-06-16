import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Flight, IFlight } from '../Interfaces/IFlight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "Flight"

  resultados:  Flight[] = [];
  
  constructor(private http:HttpClient) { }

  getFlights():Observable<IFlight>
  {
    console.log(this.apiUrl);
    return this.http.get<IFlight>(`${this.apiUrl}`)
  }
    
  add(ministerio: Flight){
    return this.http.post(this.apiUrl,ministerio);
  }

  update(id:number, flight: Flight){
    alert(JSON.stringify(flight));
    return this.http.put(this.apiUrl+"/"+id, flight);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
