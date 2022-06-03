import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myUser:any;

  constructor(private dataAuth: AuthService) { }


  loginEmail:string="";
  loginPassword:string="";
  token:string="";
  email:string="";
  pass:string="";
  isLogin:boolean= false;
  mostrar:string="Login";


  ngOnInit(): void {

  }






}
