import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }
  getStations(): Observable<any> {
    return this.http.get("http://localhost:8080/stations");
  }
  addStation(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addstation",obj);
  }
  removeStation(stationId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-station/${stationId}`); 
  }
  updateStation(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-station",obj);
  }
}
