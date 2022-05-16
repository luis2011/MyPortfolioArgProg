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
}
