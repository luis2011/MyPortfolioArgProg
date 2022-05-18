import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private urlMain = "http://127.0.0.1:3000/"

  getUser(id:number):Observable<any>{

    return this.http.get(`${this.urlMain}Usuarios/${id}`);
  }

}
