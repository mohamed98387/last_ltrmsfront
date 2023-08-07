import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  addUser(obj: any, headers: any): Observable<any> {
    return this.http.post("http://localhost:8080/users", obj, { headers });
  }
  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/users");
  }
  removeuser(userId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-user/${userId}`);
  }
  updateUser(obj: any): Observable<any> {
    return this.http.put("http://localhost:8080/update-user", obj);
  }
}
