import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpClient) {}

  private urlMain = 'https://portfolioargentinaprog.herokuapp.com';

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
  updateExperiencia( updateExp: any): Observable<any> {
    return this.http.post(`${this.urlMain}/edit/experiencia`, updateExp);
  }

  deleteExperiencia(id:number): Observable<any> {
    return this.http.delete(`${this.urlMain}/delete/experiencia/${id}`);
  }
}
