import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }

  private urlMain = "https://portfolioargentinaprog.herokuapp.com"




  //getTecnologia : obtengo todo sobre las tecnólogias que utilizo
  getTecnologia():Observable<any> {
      return this.http.get(`${this.urlMain}/ver/skill`);// representa el http a consultar
  }

  getTecnologiaId(id:number):Observable<any> {
    return this.http.get(`${this.urlMain}/skill/${id}`);// representa el http a consultar
  }

  addTecnologia(createTec:any):Observable<any>{
    return this.http.post(`${this.urlMain}/new/skill`, createTec);
  }

  updateTecnologia(updateTec:any):Observable<any>{
    return this.http.post(`${this.urlMain}/edit/skill`, updateTec);
  }

   delTecnologiaId(id:number):Observable<any> {
    return this.http.delete(`${this.urlMain}/delete/skill/${id}`);
   }

}
