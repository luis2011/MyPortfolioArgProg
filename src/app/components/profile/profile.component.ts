import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myPorfolio:any;

  // profileForm = new FormGroup({
  //   id: new FormControl(""),
  //   nombre: new FormControl("", Validators.required),
  //   apellido: new FormControl("",Validators.required),
  //   email: new FormControl("",[Validators.required , Validators.email]),
  //   telefono: new FormControl("", Validators.required),
  //   titulo: new FormControl("", Validators.required),
  //   acercaDe: new FormControl("", Validators.required),
  //   imagenDePerfil: new FormControl("", Validators.required),
  //   /**domcilio*/
  //   direccion:new FormControl("", Validators.required),
  //   codigoPostal:new FormControl("", Validators.required),
  //   localidad: new FormControl("", Validators.required),
  //   pais: new FormControl("", Validators.required),
  //   idPersona:new FormControl( 1, Validators.required),

  //   }
  // );



  constructor( private dataPorfolio:ProfileService , private dataDomicilio:ProfileService) { }



      id:number=0;
      nombre: string="";
      apellido:string="";
      email: string="";
      telefono: string="";
      titulo: string="";
      acerca_De: string="";
      imagen_De_Perfil: string="";
      /**domcilio*/
      id_domicilio:number=0;
      direccion:string="";
      codigo_Postal:string="";
      localidad: string="";
      pais: string="";
      idPersona:number=1;


  ngOnInit(): void {
    this.dataPorfolio.getData().subscribe(data => {
      this.myPorfolio = data ;
    });
  }

editPersona(id: number){
    this.obtenerData(id);
  }
  editAbout(id:number){
     this.obtenerData(id);
  }
  updatePersona(){
    this.enviarData()
  }
updateabout(){
    this.enviarData()
  }

  obtenerData(id:number){
    this.dataPorfolio.getDataId(id).subscribe(data=> {
      //console.log(data)
      this.id = (data.id);
      this.acerca_De = (data.acerca_De)
      this.nombre = (data.nombre);
      this.apellido = (data.apellido);
      this.email = (data.email);
      this.telefono = (data.telefono);
      this.titulo = (data.titulo);
      this.imagen_De_Perfil = (data.imagen_De_Perfil);
      this.id_domicilio = (data.id);
      this.direccion = (data.domicilio.direccion);
      this.codigo_Postal = (data.domicilio.codigo_Postal);
      this.localidad = (data.domicilio.localidad);
      this.pais = (data.domicilio.pais);
     });
  }

  enviarData(){
    const {
      id,
      acerca_De,
      nombre,
      apellido,
      email ,
      telefono,
      titulo,
      imagen_De_Perfil,
      id_domicilio,
      direccion,
      codigo_Postal,
      localidad,
      pais
  } = this;

    const upPersona = {
      id,
      acerca_De,
      nombre,
      apellido,
      email ,
      telefono,
      titulo,
      imagen_De_Perfil,
      id_domicilio,
      domicilio: {
            id_domicilio,
            direccion,
            codigo_Postal,
            localidad,
            pais
      }

    }

    this.dataPorfolio.updatePersona(upPersona).subscribe(data => {
      this.dataPorfolio.getData().subscribe(data => {
          this.myPorfolio = data;
      });
    })
  }

}



