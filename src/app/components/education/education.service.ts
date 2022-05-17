import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:3000/"

  //getEducacion : obtengo todo sobre mi educación
  getEducacion():Observable<any> {
    return this.http.get(`${this.urlMain}Educacion`);// representa el http a consultar
}
getEducacionId(id:number):Observable<any> {
  return this.http.get(`${this.urlMain}Educacion/${id}`);// representa el http a consultar
}

createEducacion(createEdu: any):Observable<any> {
  return this.http.post(`${this.urlMain}Educacion`, createEdu);// representa el http a consultar
}

updateEducacion(id:number, updateExp: any): Observable<any> {
  return this.http.put(`${this.urlMain}Educacion/${id}`, updateExp);
}

deleteEducacion(id:number): Observable<any> {
  return this.http.delete(`${this.urlMain}Educacion/${id}`);
}

}
