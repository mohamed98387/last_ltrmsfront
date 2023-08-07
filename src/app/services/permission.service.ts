import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PermissionService {
  constructor(private http: HttpClient) {}
  addpermission(obj: any): Observable<any> {
    return this.http.post("http://localhost:8080/addpermission", obj);
  }
  updatepermission(obj: any): Observable<any> {
    return this.http.put("http://localhost:8080/update-permission", obj);
  }
  removepermission(permissionId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-permission/${permissionId}`); 
  }

}
