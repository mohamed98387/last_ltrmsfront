import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }
  getVehicules(): Observable<any> {
    return this.http.get("http://localhost:8080/vehicules");
  }
  addVehicules(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addvehicule",obj);
  }
  removeVehicules(vehiculeId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-vehicule/${vehiculeId}`); 
  }
  updateVehicule(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-vehicule",obj);
  }
}
