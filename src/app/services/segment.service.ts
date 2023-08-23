import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private http: HttpClient) { }
  getSegments(): Observable<any> {
    return this.http.get("http://localhost:8080/Segments");
  }
  addSegment(obj:any): Observable<any> {
    return this.http.post("http://localhost:8080/addsegment",obj);
  }
  updateSegment(obj:any): Observable<any> {
    return this.http.put("http://localhost:8080/update-Segment",obj);
  }
  removeSegment(segmentId: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/remove-segment/${segmentId}`); 
  }
}
