import { Injectable } from '@angular/core';
import { RouteFlight, IRouteFlight } from '../Interfaces/IRouteFlight';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteflightService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "RouteFlight"

  resultados:  RouteFlight[] = [];
  
  constructor(private http:HttpClient) { }

  getRouteFlights():Observable<IRouteFlight>
  {
    console.log(this.apiUrl);
    return this.http.get<IRouteFlight>(`${this.apiUrl}`)
  }
  
  add(routeFlight: RouteFlight){
    return this.http.post(this.apiUrl,routeFlight);
  }

  update(id:number, routeFlight: RouteFlight){
    alert(JSON.stringify(routeFlight));
    return this.http.put(this.apiUrl+"/"+id, routeFlight);
  }



  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
