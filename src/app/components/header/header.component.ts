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
  botonLogin:string="Login"


  ngOnInit(): void {

  }
  login(){

      if (this.botonLogin === 'Logout'){
          this.botonLogin = 'Login'
          localStorage.removeItem('token');
      }else{

      this.dataAuth.getUser(1).subscribe(data => {
      this.email = (data.email)
      this.pass = (data.password)
      this.token = (data.token)

        if (this.loginEmail === this.email && this.loginPassword === this.pass){
            localStorage.setItem('token', this.token)
            this.botonLogin ="Logout"
        }else{
          alert("Email o Password Incorrecto");
        }
      })
    }
  }


}
