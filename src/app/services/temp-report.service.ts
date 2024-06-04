import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TempReportService {

  constructor(private http : HttpClient) { }
url = "http://localhost:3000/reports"

 behaviorSubject = new BehaviorSubject<any>([])

addReport(form:any):Observable<any>{
  return this.http.post(this.url, form);
}
 updateReport(id:any,data:any): Observable<any> {
  return this.http.put(`${this.url}/${id}`,data)
 }
 getReport(id:any){
  return this.http.get(`${this.url}/${id}`)
 }
getList() {
   this.http.get(this.url).subscribe({next:(res)=>{console.log('res');
   this.behaviorSubject.next(res);
},error(err) {
  console.error(err)
},})
}
deleteReport(id: number): Observable<any> {
  return this.http.delete(`${this.url}/${id}`);
}
}
