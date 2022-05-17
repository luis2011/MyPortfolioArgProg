import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:3000/"




  //getTecnologia : obtengo todo sobre las tecnólogias que utilizo
  getTecnologia():Observable<any> {
      return this.http.get(`${this.urlMain}Tecnologias`);// representa el http a consultar
  }

  getTecnologiaId(id:number):Observable<any> {
    return this.http.get(`${this.urlMain}Tecnologias/${id}`);// representa el http a consultar
  }

  addTecnologia(createTec:any):Observable<any>{
    return this.http.post(`${this.urlMain}Tecnologias`, createTec);
  }

  updateTecnologia(id:number, updateTec:any):Observable<any>{
    return this.http.patch(`${this.urlMain}Tecnologias/${id}`, updateTec);
  }

   delTecnologiaId(id:number):Observable<any> {
    return this.http.delete(`${this.urlMain}Tecnologias/${id}`);
   }

}
