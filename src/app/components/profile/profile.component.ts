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
      acercaDe: string="";
      imagenDePerfil: string="";
      /**domcilio*/
      direccion:string="";
      codigoPostal:string="";
      localidad: string="";
      pais: string="";
      idPersona:number=1;


  ngOnInit(): void {
    this.dataPorfolio.getData().subscribe(data => {
     this.myPorfolio = data ;
    });
  }


  editPersona(id: number){

    this.dataPorfolio.getDataId(id).subscribe(data=> {
      this.id = (data.id);
      this.nombre = (data.nombre);
      this.apellido = (data.apellido);
      this.email = (data.email);
      this.telefono = (data.telefono);
      this.titulo = (data.titulo);
      this.imagenDePerfil = (data.imagen_De_Perfil);
      //console.log(this.nombre)
      this.direccion = (data.domicilio.direccion);
      this.codigoPostal = (data.domicilio.codigo_Postal);
      this.localidad = (data.domicilio.localidad);
      this.pais = (data.domicilio.pais);

     });


  }

  updatePersona(){

        const {
        id,
        nombre,
        apellido,
        email ,
        telefono,
        titulo,
        imagenDePerfil,
        direccion,
        codigoPostal,
        localidad,
        pais
    } = this;

      const upPersona = {
        id,
        nombre,
        apellido,
        email ,
        telefono,
        titulo,
        imagenDePerfil,
        domicilio: {
              direccion,
              codigoPostal,
              localidad,
              pais
        }

      }

      this.dataPorfolio.updatePersonaId(id , upPersona).subscribe(data => {
        this.dataPorfolio.getData().subscribe(data => {
            this.myPorfolio = data;
        });
      })


  }

  editAbout(id:number){

    this.dataPorfolio.getDataId(id).subscribe(data=> {
        this.id = (data.id);
        this.acercaDe=(data.acercaDe);
      });
  }

  updateabout(){
    const  {
      id,
      acercaDe
    } = this;
    const sobreMi = {
      id,
      acercaDe
    }
         this.dataPorfolio.updateAbout(id, sobreMi).subscribe((data:any) =>{
          this.dataPorfolio.getData().subscribe(data => {
              this.myPorfolio = data;
          });
    });

  }




}
