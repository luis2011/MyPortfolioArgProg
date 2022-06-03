import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EducationService } from '../education/education.service'
import { ExperienceService } from '../education/experience.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  myExperiencia:any;
  myEducacion:any;
  myExperienciaId:any;

  constructor
  (private dataExperiencia:ExperienceService ,
    private dataEducacion:EducationService,){}

        // experience
        id:number=0;
        descripcionTrabajo:string="";
        nombreEmpresa:string="";
        tipoJornada:string="";
        fechaEntrada:string="";
        fechaSalida:string="";
        localidad:string="";
        pais:string="";
        imagenDeEmpresa:string="";
        idPersona:number=1;
        //education

       nombreInstitucion: string="";
       nombreCarrera:string="";
       fechaInicio:string="";
       fechaFin:string="";
       imagenDeInstitucion:string="";

//Experiencia_laboral
  ngOnInit(): void {
    this.dataExperiencia.getExperiencia().subscribe(data => {
      //console.log(data);
        this.myExperiencia = data;
      });
      this.dataEducacion.getEducacion().subscribe(dataD => {
       // console.log(dataD);
          this.myEducacion = dataD;
        });
  }

  closeEx(){
    this.descripcionTrabajo="";
    this.nombreEmpresa="";
    this.tipoJornada="";
    this.fechaEntrada="";
    this.fechaSalida="";
    this.localidad="";
    this.pais="";
    this.imagenDeEmpresa="";
  }

  close(){
    this.nombreInstitucion="";
    this.nombreCarrera="";
    this.fechaInicio ="";
    this.fechaFin="";
    this.imagenDeInstitucion;
  }

  createNewExperiencia(){
    const {
        id,
        descripcionTrabajo,
        nombreEmpresa,
        tipoJornada,
        fechaEntrada,
        fechaSalida,
        localidad,
        pais,
        imagenDeEmpresa,
        idPersona
      } = this
      const newExperience = {
        id,
        descripcionTrabajo,
        nombreEmpresa,
        tipoJornada,
        fechaEntrada,
        fechaSalida,
        localidad,
        pais,
        imagenDeEmpresa,
        idPersona
      }
      this.dataExperiencia.createExperiencia(newExperience).subscribe((data: any) =>{
        this.dataExperiencia.getExperiencia().subscribe(data => {
          //console.log(data);
            this.myExperiencia = data;

            this.id=0;
            this.descripcionTrabajo="";
            this.nombreEmpresa="";
            this.tipoJornada="";
            this.fechaEntrada="";
            this.fechaSalida="";
            this.localidad="";
            this.pais="";
            this.imagenDeEmpresa="";
            this.idPersona=1;
          });
      });
}


  editExperience(id:number){
    //alert(id)
    this.dataExperiencia.getExperienciaId(id).subscribe(data => {
     // console.log(data.id);
      //console.log(data);
       // this.myExperienciaId = data;
        this.id = (data.id);
        this.descripcionTrabajo=(data.descripcionTrabajo);
        this.nombreEmpresa=(data.nombreEmpresa);
        this.tipoJornada=(data.tipoJornada);
        this.fechaEntrada=(data.fechaEntrada);
        this.fechaSalida=(data.fechaSalida);
        this.localidad=(data.localidad);
        this.pais=(data.pais);
        this.imagenDeEmpresa=(data.imagenDeEmpresa);
      });
  }


  updateExperiencia(){
   // alert("guardando" + this.descripcionTrabajo)
   const {
    id,
    descripcionTrabajo,
    nombreEmpresa,
    tipoJornada,
    fechaEntrada,
    fechaSalida,
    localidad,
    pais,
    imagenDeEmpresa,
    idPersona
  } = this
  const updateExperience = {
    id,
    descripcionTrabajo,
    nombreEmpresa,
    tipoJornada,
    fechaEntrada,
    fechaSalida,
    localidad,
    pais,
    imagenDeEmpresa,
    idPersona
  }
  this.dataExperiencia.updateExperiencia(id , updateExperience).subscribe((data: any) =>{
    this.dataExperiencia.getExperiencia().subscribe(data => {
      //console.log(data);
        this.myExperiencia = data;
        this.id=0;
        this.descripcionTrabajo="";
        this.nombreEmpresa="";
        this.tipoJornada="";
        this.fechaEntrada="";
        this.fechaSalida="";
        this.localidad="";
        this.pais="";
        this.imagenDeEmpresa="";
        this.idPersona=1;
      });
  });



  }

  delExperience(id:number){

  let opcion = confirm("¿Desea elminiar el item de Experiencia?");
  if (opcion ==true){
    this.dataExperiencia.deleteExperiencia(id).subscribe((data: any) =>{
    this.dataExperiencia.getExperiencia().subscribe(data => {
      this.myExperiencia = data;
      });
  });
  }


  }


  /* EDUCATION*/



  createNewEducation(){
     const  {
       id,
       nombreInstitucion,
       nombreCarrera,
       fechaInicio,
       fechaFin,
       imagenDeInstitucion
     } = this

     const createEducation = {
       id,
      nombreInstitucion,
      nombreCarrera,
      fechaInicio,
      fechaFin,
      imagenDeInstitucion
     }
     this.dataEducacion.createEducacion(createEducation).subscribe((data: any) =>{
      this.dataEducacion.getEducacion().subscribe(data => {
        //console.log(data);
          this.myEducacion = data;
          this.nombreInstitucion="";
          this.nombreCarrera="";
          this.fechaInicio ="";
          this.fechaFin="";
          this.imagenDeInstitucion;

        });
    });


  }

  editEdu(id:number){
    this.dataEducacion.getEducacionId(id).subscribe(data => {
      // console.log(data.id);
       //console.log(data);
        // this.myExperienciaId = data;
         this.id = (data.id);
         this.nombreInstitucion=(data.nombreInstitucion);
         this.nombreCarrera=(data.nombreCarrera);
         this.fechaInicio=(data.fechaInicio);
         this.fechaFin=(data.fechaFin);
         this.imagenDeInstitucion=(data.imagenDeInstitucion);

      });
  }


  updateEdu(){
    const  {
      id,
      nombreInstitucion,
      nombreCarrera,
      fechaInicio,
      fechaFin,
      imagenDeInstitucion
    } = this

    const updateEducation = {
      id,
     nombreInstitucion,
     nombreCarrera,
     fechaInicio,
     fechaFin,
     imagenDeInstitucion
    }
    this.dataEducacion.updateEducacion(id, updateEducation).subscribe((data: any) =>{
     this.dataEducacion.getEducacion().subscribe(data => {
       //console.log(data);
         this.myEducacion = data;
         this.nombreInstitucion="";
         this.nombreCarrera="";
         this.fechaInicio ="";
         this.fechaFin="";
         this.imagenDeInstitucion;

       });
   });
  }

  deleteEdu(id:number){
    let opcion = confirm("¿Desea elminiar el item de Educacion?");
    if (opcion ==true){
      this.dataEducacion.deleteEducacion(id).subscribe((data: any) =>{
      this.dataEducacion.getEducacion().subscribe(data => {
        this.myEducacion = data;
        });
    });
    }
  }

}
