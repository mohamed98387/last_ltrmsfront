import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor(private http: HttpClient) {}
  getRoles(): Observable<any> {
    return this.http.get("http://localhost:8080/roles");
  }
  getPermisions(): Observable<any> {
    return this.http.get("http://localhost:8080/permissions");
  }
  addRole(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/addrole", obj);
  }
  updateRole(obj: any): Observable<any> {
    return this.http.put("http://localhost:8080/update-role", obj);
  }
  removeRole(roleId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-role/${roleId}`);
  }
}
