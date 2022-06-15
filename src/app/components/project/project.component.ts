import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  myProyecto:any;

  constructor(private dataProyecto:ProjectService) { }

  id:number = 0;
  nombre_Proyecto:string="";
  descripcion_Proyecto:string="";

  ngOnInit(): void {
    this.dataProyecto.getProyecto().subscribe(data => {
      //console.log(data);
        this.myProyecto = data;
      });
  }

  close(){
    this.id = 0;
    this.nombre_Proyecto ="";
    this.descripcion_Proyecto = "";
  }

  createProj(){

     const {
      id,
      nombre_Proyecto,
      descripcion_Proyecto
    }= this
    const createProj = {
      id,
      nombre_Proyecto,
      descripcion_Proyecto
    }

    this.dataProyecto.addProyecto(createProj).subscribe(data =>{
      this.dataProyecto.getProyecto().subscribe(data => {
         this.myProyecto = data;
        this.id = 0;
        this.nombre_Proyecto ="";
        this.descripcion_Proyecto = "";

      })
    })
  }

  editProj(id:number){
    this.dataProyecto.getProyectoId(id).subscribe(data =>{
      this.id = (data.id);
      this.nombre_Proyecto = (data.nombre_Proyecto);
      this.descripcion_Proyecto = (data.descripcion_Proyecto);
    })
  }

  updateProj(){
    const {
      id,
      nombre_Proyecto,
      descripcion_Proyecto
    }= this
    const updateProj = {
      id,
      nombre_Proyecto,
      descripcion_Proyecto
    }
    this.dataProyecto.updateProyecto(id, updateProj).subscribe(data =>{
      this.dataProyecto.getProyecto().subscribe(data => {
         this.myProyecto = data;
        this.id = 0;
        this.nombre_Proyecto ="";
        this.descripcion_Proyecto = "";

      })
    })
  }

  deleteProj(id:number){
    let opcion = confirm("¿Desea elminiar el item de Educacion?");
    if (opcion ==true){
      this.dataProyecto.delProyectoId(id).subscribe((data: any)=>{
         this.dataProyecto.getProyecto().subscribe(data => {
           this.myProyecto = data;
         })
      })
    }
  }

}
