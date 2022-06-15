import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:8080"

  //getEducacion : obtengo todo sobre mi educación
  getEducacion():Observable<any> {
    return this.http.get(`${this.urlMain}/ver/educacion`);// representa el http a consultar
}
getEducacionId(id:number):Observable<any> {
  return this.http.get(`${this.urlMain}/educacion/${id}`);// representa el http a consultar
}

createEducacion(createEdu: any):Observable<any> {
  return this.http.post(`${this.urlMain}/new/educacion`, createEdu);// representa el http a consultar
}

updateEducacion(updateExp: any): Observable<any> {
  return this.http.post(`${this.urlMain}/edit/educacion`, updateExp);
}

deleteEducacion(id:number): Observable<any> {
  return this.http.delete(`${this.urlMain}/delete/educacion/${id}`);
}

}
