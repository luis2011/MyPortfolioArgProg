import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {}

  private urlMain = 'http://127.0.0.1:8080';

  /** EXPERIENCIA**/
  //getExperiencia : obtengo todas mis experiencias laborales
  getExperiencia(): Observable<any> {
    return this.http.get(`${this.urlMain}/ver/experiencia`); // representa el http a consultar
  }

  getExperienciaId(id:number): Observable<any> {
    return this.http.get(`${this.urlMain}/experiencia/${id}`); // representa el http a consultar
  }

  createExperiencia(createExp: any): Observable<any> {
    return this.http.post(`${this.urlMain}/new/experiencia`, createExp);
  }
  updateExperiencia(id:number, updateExp: any): Observable<any> {
    return this.http.post(`${this.urlMain}/edit/experiencia/${id}`, updateExp);
  }

  deleteExperiencia(id:number): Observable<any> {
    return this.http.delete(`${this.urlMain}/delete/experiencia/${id}`);
  }
}
