import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  //private urlMain = "http://127.0.0.1:3000/"
  private urlMain = "http://127.0.0.1:8080/"
   getData():Observable<any> {
    return this.http.get(`${this.urlMain}ver/persona`);// representa el http a consultar
}


// getDataId(id:number): Observable<any> {
//   return this.http.get(`${this.urlMain}ver/persona/${id}`);
// }
getDataId(id:number): Observable<any> {
  return this.http.get(`${this.urlMain}persona/${id}`);
}

updateAbout(id:number, updateMy: any): Observable<any> {
    return this.http.patch(`${this.urlMain}edit/persona/${id}`, updateMy);
  }

  updatePersonaId(id:number, updateMy: any): Observable<any> {
    console.log(updateMy);
    return this.http.patch(`${this.urlMain}Persona/${id}`, updateMy);
  }
}
