import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {}

  private urlMain = 'http://127.0.0.1:3000/';

  /** EXPERIENCIA**/
  //getExperiencia : obtengo todas mis experiencias laborales
  getExperiencia(): Observable<any> {
    return this.http.get(`${this.urlMain}Experiencia_laboral`); // representa el http a consultar
  }

  getExperienciaId(id:number): Observable<any> {
    return this.http.get(`${this.urlMain}Experiencia_laboral/${id}`); // representa el http a consultar
  }

  createExperiencia(createExp: any): Observable<any> {
    return this.http.post(`${this.urlMain}Experiencia_laboral`, createExp);
  }
  updateExperiencia(id:number, updateExp: any): Observable<any> {
    return this.http.put(`${this.urlMain}Experiencia_laboral/${id}`, updateExp);
  }

  deleteExperiencia(id:number): Observable<any> {
    return this.http.delete(`${this.urlMain}Experiencia_laboral/${id}`);
  }
}
