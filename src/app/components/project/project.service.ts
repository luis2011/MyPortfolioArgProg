import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:3000/"
  //getProyecto: obtengo todos mis proyectos
  getProyecto():Observable<any> {
    return this.http.get(`${this.urlMain}Proyectos`);// representa el http a consultar
}
}
