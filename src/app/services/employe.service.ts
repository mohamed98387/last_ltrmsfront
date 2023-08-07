import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) { }
  importEmployees(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post("http://localhost:8080/import-employees", formData);
  }
}
