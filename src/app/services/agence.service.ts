import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }
  getAgences(): Observable<any> {
    return this.http.get("http://localhost:8080/agences");
  }
  addAgence(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addagence",obj);
  }
  removeAgence(agenceId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-agence/${agenceId}`); 
  }
  updateAgence(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-agence",obj);
  }
}
