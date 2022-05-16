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
}
