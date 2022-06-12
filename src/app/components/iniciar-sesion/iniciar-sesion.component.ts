import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder: FormBuilder,
              private autenticacionService: AutenticacionService,
              private ruta:Router
              )
    {
    this.form = this.formBuilder.group(
    {
      nombreUsuario:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]]
    }
    );

   }

  ngOnInit(): void {
  }

  get nombreUsuario(){
    return this.form.get('nombreUsuario');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault();
    this.autenticacionService.IniciarSession(this.form.value).subscribe(data => {
      // console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);

    })

  }

}
