import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient) { }
  getCircuits(): Observable<any> {
    return this.http.get("http://localhost:8080/circuits");
  }
  addCircuit(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addcircuit",obj);
  }
  removeCircuit(circuitId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-circuit/${circuitId}`); 
  }
  updateCircuit(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-circuit",obj);
  }
}
