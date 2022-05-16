import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  private urlMain = "http://127.0.0.1:3000/"
  //getData : obtengo todo sobre mi persona
  getData():Observable<any> {
    return this.http.get(`${this.urlMain}Persona`);// representa el http a consultar
}
//getDomicilio: obtengo todo sobre mi domicilio
getDomicilio():Observable<any> {
    return this.http.get(`${this.urlMain}Domicilio`);// representa el http a consultar
}

getDataId(id:number): Observable<any> {
  return this.http.get(`${this.urlMain}Persona/${id}`); // representa el http a consultar
}

getDomicilioId(id:number): Observable<any> {
  return this.http.get(`${this.urlMain}Domicilio/${id}`); // representa el http a consultar
}

// modificar solo sobre mi
updateAbout(id:number, updateMy: any): Observable<any> {
    return this.http.patch(`${this.urlMain}Persona/${id}`, updateMy);
  }

  updatePersonaId(id:number, updateMy: any): Observable<any> {
    return this.http.patch(`${this.urlMain}Persona/${id}`, updateMy);
  }

  updateDomicilioId(id:number, updateMy: any): Observable<any> {
    return this.http.patch(`${this.urlMain}Domicilio/${id}`, updateMy);
  }


}
