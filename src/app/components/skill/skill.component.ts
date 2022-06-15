import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill/skill.service'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})


export class SkillComponent implements OnInit {

  myTecnologia:any;
  constructor(private dataTecnologia:SkillService) { }

  id:number=0;
  descripcion_Habilidades: string="";
  porcentaje_Habilidades:string="";


  ngOnInit(): void {
    this.dataTecnologia.getTecnologia().subscribe(data => {
      //console.log(data);
        this.myTecnologia = data;
      });
  }

  close(){
    this.id=0;
    this.descripcion_Habilidades="";
    this.porcentaje_Habilidades="";
  }
  createTecno(){
    const {
      id,
      descripcion_Habilidades,
      porcentaje_Habilidades
    } = this
    const createTecno = {
      id,
      descripcion_Habilidades,
      porcentaje_Habilidades
    }

    this.dataTecnologia.addTecnologia(createTecno).subscribe(data => {
      this.dataTecnologia.getTecnologia().subscribe(data => {
        //console.log(data);
          this.myTecnologia = data;

          this.id=0;
          this.descripcion_Habilidades="";
          this.porcentaje_Habilidades="";
        });
    });
  }

  editTecno(id:number){
    this.dataTecnologia.getTecnologiaId(id).subscribe(data => {
      console.log(data.id);
       console.log(data);
        // this.myExperienciaId = data;
         this.id = (data.id);
         this.descripcion_Habilidades=(data.descripcion_Habilidades);
         this.porcentaje_Habilidades=(data.porcentaje_Habilidades);

      });
  }

  updateTecno(){
    const  {
      id,
      descripcion_Habilidades,
      porcentaje_Habilidades
    } = this
    const updateTec = {
      id,
      descripcion_Habilidades,
      porcentaje_Habilidades
    }
    this.dataTecnologia.updateTecnologia(updateTec).subscribe((data: any) =>{

    this.dataTecnologia.getTecnologia().subscribe(data => {
       //console.log(data);
         this.myTecnologia = data;
         this.descripcion_Habilidades="";
         this.porcentaje_Habilidades="";

       });
   });


  }

  deleteTecno(id:number){
    let opcion = confirm("¿Desea elminiar el item de Educacion?");
    if (opcion ==true){
      this.dataTecnologia.delTecnologiaId(id).subscribe((data: any) =>{
      this.dataTecnologia.getTecnologia().subscribe(data => {
        this.myTecnologia = data;
        });
    });
    }
  }

}
