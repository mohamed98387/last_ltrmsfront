import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class EmployeService {
  constructor(private http: HttpClient) {}
  importEmployees(file: File) {
    const formData = new FormData();
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data"); // Set the content type

    // Set headers in the request options
    const requestOptions = { headers: headers };
    formData.append("my_file_1691416170827", file);
    return this.http.post(
      "http://localhost:8080/import-employees",
      formData,
      requestOptions
    );
  }
  getEmployees(): Observable<any> {
    return this.http.get("http://localhost:8080/employees");
  }
}
