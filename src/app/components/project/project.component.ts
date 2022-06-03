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
  nombreProyecto:string="";
  descripcionProyecto:string="";

  ngOnInit(): void {
    this.dataProyecto.getProyecto().subscribe(data => {
      //console.log(data);
        this.myProyecto = data;
      });
  }

  close(){
    this.id = 0;
    this.nombreProyecto ="";
    this.descripcionProyecto = "";
  }

  createProj(){

     const {
      id,
      nombreProyecto,
      descripcionProyecto
    }= this
    const createProj = {
      id,
      nombreProyecto,
      descripcionProyecto
    }

    this.dataProyecto.addProyecto(createProj).subscribe(data =>{
      this.dataProyecto.getProyecto().subscribe(data => {
         this.myProyecto = data;
        this.id = 0;
        this.nombreProyecto ="";
        this.descripcionProyecto = "";

      })
    })
  }

  editProj(id:number){
    this.dataProyecto.getProyectoId(id).subscribe(data =>{
      this.id = (data.id);
      this.nombreProyecto = (data.nombreProyecto);
      this.descripcionProyecto = (data.descripcionProyecto);
    })
  }

  updateProj(){
    const {
      id,
      nombreProyecto,
      descripcionProyecto
    }= this
    const updateProj = {
      id,
      nombreProyecto,
      descripcionProyecto
    }
    this.dataProyecto.updateProyecto(id, updateProj).subscribe(data =>{
      this.dataProyecto.getProyecto().subscribe(data => {
         this.myProyecto = data;
        this.id = 0;
        this.nombreProyecto ="";
        this.descripcionProyecto = "";

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
