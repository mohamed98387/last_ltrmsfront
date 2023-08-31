import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http: HttpClient) { }
  getChauffeurs(): Observable<any> {
    return this.http.get("http://localhost:8080/chauffeurs");
  }
  addChauffeurs(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addchauffeur",obj);
  }
  removeChauffeurs(chauffeurId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-chauffeur/${chauffeurId}`); 
  }
  updateChauffeur(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-chauffeur",obj);
  }
}
