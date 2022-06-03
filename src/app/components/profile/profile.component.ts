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
  myDomicilio:any;

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
    //console.log(data);
      this.myPorfolio = data;

    });
    this.dataDomicilio.getDomicilio().subscribe(data => {
      //console.log(data);
        this.myDomicilio = data;
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
      this.imagenDePerfil = (data.imagenDePerfil);
      console.log(this.nombre)
    });
    this.dataDomicilio.getDomicilioId(id).subscribe(dataD => {
      this.direccion = (dataD.direccion);
      this.codigoPostal = (dataD.codigoPostal);
      this.localidad = (dataD.localidad);
      this.pais = (dataD.pais);
      console.log(this.pais)
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
        /**domcilio*/
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
        imagenDePerfil
      }

      const upDomicilio = {
        direccion,
        codigoPostal,
        localidad,
        pais
      }
      this.dataPorfolio.updatePersonaId(id , upPersona).subscribe(data => {
        this.dataPorfolio.getData().subscribe(data => {
          //console.log(data);
            this.myPorfolio = data;

          });
      })
      this.dataDomicilio.updateDomicilioId(id , upDomicilio).subscribe(data => {
        this.dataDomicilio.getDomicilio().subscribe(data => {
          //console.log(data);
            this.myDomicilio = data;
          });
      })

  }

  editAbout(id:number){

    //alert(id)
    this.dataPorfolio.getDataId(id).subscribe(data=> {
        this.id = (data.id);
        this.acercaDe=(data.acercaDe);
        console.log(this.acercaDe);
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
         this.myPorfolio = data;
         this.dataPorfolio.getData().subscribe(data => {
          //console.log(data);
            this.myPorfolio = data;

          });
    });

  }




}
