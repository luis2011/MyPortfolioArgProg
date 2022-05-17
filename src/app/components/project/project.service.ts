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

getProyectoId(id:number):Observable<any> {
  return this.http.get(`${this.urlMain}Proyectos/${id}`);// representa el http a consultar
}

addProyecto(createProj:any):Observable<any>{
  return this.http.post(`${this.urlMain}Proyectos`, createProj);
}

updateProyecto(id:number, updateProj:any):Observable<any>{
  return this.http.patch(`${this.urlMain}Proyectos/${id}`, updateProj);
}

delProyectoId(id:number):Observable<any> {
  return this.http.delete(`${this.urlMain}Proyectos/${id}`);// representa el http a consultar
}
}
