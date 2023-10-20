import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanificationProductionService {

  constructor(private http: HttpClient) { }
  importplanificationProduction(file: File, semaine: string) {
    const formData = new FormData();
    const headers = new HttpHeaders();
    const params = new HttpParams().set('semaine', semaine);
    headers.append("Content-Type", "multipart/form-data"); // Set the content type

    // Set headers in the request options
    const requestOptions = { headers: headers };
    formData.append("planning_import_template_1696681355167", file);

    return this.http.post(
      "http://localhost:8080/import-planificationProductions",
      formData,
      {
        params,  // Include semaine as a query parameter
      }
    );
  }
}
