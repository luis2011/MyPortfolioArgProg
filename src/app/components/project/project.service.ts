import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:8080"
  //getProyecto: obtengo todos mis proyectos
  getProyecto():Observable<any> {
    return this.http.get(`${this.urlMain}/ver/proyecto`);// representa el http a consultar
}

getProyectoId(id:number):Observable<any> {
  return this.http.get(`${this.urlMain}/proyecto/${id}`);// representa el http a consultar
}

addProyecto(createProj:any):Observable<any>{
  return this.http.post(`${this.urlMain}/new/proyecto`, createProj);
}

updateProyecto(id:number, updateProj:any):Observable<any>{
  return this.http.post(`${this.urlMain}/edit/proyecto`, updateProj);
}

delProyectoId(id:number):Observable<any> {
  return this.http.delete(`${this.urlMain}/delete/proyecto/${id}`);// representa el http a consultar
}
}
