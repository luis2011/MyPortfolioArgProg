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
        descripcion_Trabajo:string="";
        nombre_Empresa:string="";
        tipo_Jornada:string="";
        fecha_Entrada:string="";
        fecha_Salida:string="";
        localidad:string="";
        pais:string="";
        imagen_De_Empresa:string="";
        idPersona:number=1;
        //education

       nombre_Institucion: string="";
       nombre_Carrera:string="";
       fecha_Inicio:string="";
       fecha_Fin:string="";
       imagen_De_Institucion:string="";

//Experiencia_laboral
  ngOnInit(): void {
    this.dataExperiencia.getExperiencia().subscribe(data => {
      //console.log(data);
        this.myExperiencia = data;
      });
      this.dataEducacion.getEducacion().subscribe(dataD => {
        //console.log(dataD);
          this.myEducacion = dataD;
        });
  }

  closeEx(){
    this.descripcion_Trabajo="";
    this.nombre_Empresa="";
    this.tipo_Jornada="";
    this.fecha_Entrada="";
    this.fecha_Salida="";
    this.localidad="";
    this.pais="";
    this.imagen_De_Empresa="";
  }

  close(){
    this.nombre_Institucion="";
    this.nombre_Carrera="";
    this.fecha_Inicio ="";
    this.fecha_Fin="";
    this.imagen_De_Institucion;
  }

  createNewExperiencia(){
    const {
        id,
        descripcion_Trabajo,
        nombre_Empresa,
        tipo_Jornada,
        fecha_Entrada,
        fecha_Salida,
        localidad,
        pais,
        imagen_De_Empresa,
        idPersona
      } = this
      const newExperience = {
        id,
        descripcion_Trabajo,
        nombre_Empresa,
        tipo_Jornada,
        fecha_Entrada,
        fecha_Salida,
        localidad,
        pais,
        imagen_De_Empresa,
        idPersona
      }
      this.dataExperiencia.createExperiencia(newExperience).subscribe((data: any) =>{
        this.dataExperiencia.getExperiencia().subscribe(data => {
          //console.log(data);
            this.myExperiencia = data;

            this.id=0;
            this.descripcion_Trabajo="";
            this.nombre_Empresa="";
            this.tipo_Jornada="";
            this.fecha_Entrada="";
            this.fecha_Salida="";
            this.localidad="";
            this.pais="";
            this.imagen_De_Empresa="";
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
        this.descripcion_Trabajo=(data.descripcion_Trabajo);
        this.nombre_Empresa=(data.nombre_Empresa);
        this.tipo_Jornada=(data.tipo_Jornada);
        this.fecha_Entrada=(data.fecha_Entrada);
        this.fecha_Salida=(data.fecha_Salida);
        this.localidad=(data.localidad);
        this.pais=(data.pais);
        this.imagen_De_Empresa=(data.imagen_De_Empresa);
      });
  }


  updateExperiencia(){
   // alert("guardando" + this.descripcionTrabajo)
   const {
    id,
    descripcion_Trabajo,
    nombre_Empresa,
    tipo_Jornada,
    fecha_Entrada,
    fecha_Salida,
    localidad,
    pais,
    imagen_De_Empresa,
    idPersona
  } = this
  const updateExperience = {
    id,
    descripcion_Trabajo,
    nombre_Empresa,
    tipo_Jornada,
    fecha_Entrada,
    fecha_Salida,
    localidad,
    pais,
    imagen_De_Empresa,
    idPersona
  }
  this.dataExperiencia.updateExperiencia(updateExperience).subscribe((data: any) =>{
    this.dataExperiencia.getExperiencia().subscribe(data => {
      //console.log(data);
        this.myExperiencia = data;
        this.id=0;
        this.descripcion_Trabajo="";
        this.nombre_Empresa="";
        this.tipo_Jornada="";
        this.fecha_Entrada="";
        this.fecha_Salida="";
        this.localidad="";
        this.pais="";
        this.imagen_De_Empresa="";
        this.idPersona=1;
      });
  });



  }

  delExperience(id:number){

  let opcion = confirm("??Desea elminiar el item de Experiencia?");
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
       nombre_Institucion,
       nombre_Carrera,
       fecha_Inicio,
       fecha_Fin,
       imagen_De_Institucion
     } = this

     const createEducation = {
       id,
      nombre_Institucion,
      nombre_Carrera,
      fecha_Inicio,
      fecha_Fin,
      imagen_De_Institucion
     }
     this.dataEducacion.createEducacion(createEducation).subscribe((data: any) =>{
      this.dataEducacion.getEducacion().subscribe(data => {
        //console.log(data);
          this.myEducacion = data;
          this.nombre_Institucion="";
          this.nombre_Carrera="";
          this.fecha_Inicio ="";
          this.fecha_Fin="";
          this.imagen_De_Institucion;

        });
    });


  }

  editEdu(id:number){
    this.dataEducacion.getEducacionId(id).subscribe(data => {
      // console.log(data.id);
       //console.log(data);
        // this.myExperienciaId = data;
         this.id = (data.id);
         this.nombre_Institucion=(data.nombre_Institucion);
         this.nombre_Carrera=(data.nombre_Carrera);
         this.fecha_Inicio=(data.fecha_Inicio);
         this.fecha_Fin=(data.fecha_Fin);
         this.imagen_De_Institucion=(data.imagen_De_Institucion);

      });
  }


  updateEdu(){
    const  {
      id,
      nombre_Institucion,
      nombre_Carrera,
      fecha_Inicio,
      fecha_Fin,
      imagen_De_Institucion
    } = this

    const updateEducation = {
      id,
     nombre_Institucion,
     nombre_Carrera,
     fecha_Inicio,
     fecha_Fin,
     imagen_De_Institucion
    }
    this.dataEducacion.updateEducacion(updateEducation).subscribe((data: any) =>{
     this.dataEducacion.getEducacion().subscribe(data => {
       //console.log(data);
         this.myEducacion = data;
         this.nombre_Institucion="";
         this.nombre_Carrera="";
         this.fecha_Inicio ="";
         this.fecha_Fin="";
         this.imagen_De_Institucion;

       });
   });
  }

  deleteEdu(id:number){
    let opcion = confirm("??Desea elminiar el item de Educacion?");
    if (opcion ==true){
      this.dataEducacion.deleteEducacion(id).subscribe((data: any) =>{
      this.dataEducacion.getEducacion().subscribe(data => {
        this.myEducacion = data;
        });
    });
    }
  }

}
