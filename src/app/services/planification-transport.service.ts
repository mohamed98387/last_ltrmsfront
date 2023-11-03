import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanificationTransportService {

  constructor(private http: HttpClient) { }
  addplanificationtransport(agenceName: any): Observable<any> {
    return this.http.get(`http://localhost:8080/addplanificationtransport/${agenceName}`);
  }
  newlPlanificationTransport(agenceName: any): Observable<any> {
    return this.http.get(`http://localhost:8080/newlPlanificationTransport/${agenceName}`);
  }
  lisFinalPlanificationTransports(): Observable<any> {
    return this.http.get("http://localhost:8080/lisFinalPlanificationTransports");
  }
  deleteallPlanificationTrasport(): Observable<any> {
    return this.http.delete("http://localhost:8080/clear-table-PlanficationTransport");
  }
  deleteallFianlPlanificationTrasport(): Observable<any> {
    return this.http.delete("http://localhost:8080/clear-table-finalPlanfication");
  }
}
