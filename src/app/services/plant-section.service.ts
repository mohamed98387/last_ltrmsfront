import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PlantSectionService {

  constructor(private http: HttpClient) { }
  getPlantSetions(): Observable<any> {
    return this.http.get("http://localhost:8080/plantSections");
  }
  addPlantSetions(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addplantSection",obj);
  }
  removePlantSetions(plantSetionId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-plantSection/${plantSetionId}`); 
  }
  updatePlantSetions(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-plantSection",obj);
  }
}
