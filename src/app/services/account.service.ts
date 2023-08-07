import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}

  onLogin(obj: any, headers: any): Observable<any> {
    return this.http.post("http://localhost:8080/login", obj, { headers });
  }
  getUser(): Observable<any> {
    return this.http.get("http://localhost:8080/profile");
  }
  refreshToken(headers: any): Observable<any> {
    return this.http.get("http://localhost:8080/refreshToken", { headers });
  }
  checkEmail(email: any): Observable<any> {
    return this.http.post("http://localhost:8080/checkEmail", { email });
  }
  resetPassword(email: any, code: any, password: any): Observable<any> {
    return this.http.post("http://localhost:8080/resetPassword", {
      email,
      code,
      password,
    });
  }
}
