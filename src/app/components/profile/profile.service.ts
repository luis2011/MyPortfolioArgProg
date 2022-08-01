import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private urlMain = "https://portfolioargentinaprog.herokuapp.com"

  constructor(private http:HttpClient) { }

  //private urlMain = "http://127.0.0.1:3000/"

   getData():Observable<any> {
    return this.http.get(`${this.urlMain}/ver/persona`);// representa el http a consultar

}


// getDataId(id:number): Observable<any> {
//   return this.http.get(`${this.urlMain}ver/persona/${id}`);
// }
getDataId(id:number): Observable<any> {
  return this.http.get(`${this.urlMain}/persona/${id}`);

}

//modifica solo acerca de mi
 updateAbout(updateMyAbout: any): Observable<any> {
   console.log(updateMyAbout);
    return this.http.post(`${this.urlMain}/edit/persona`, updateMyAbout);
}

// modifica la persona entera
  updatePersona(updateMy: any): Observable<any> {
    console.log(updateMy);
    return this.http.post(`${this.urlMain}/edit/persona`, updateMy);

  }
}
