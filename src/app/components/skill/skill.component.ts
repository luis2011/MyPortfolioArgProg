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
  descripcionHabilidades: string="";
  porcentajeHabilidades:string="";


  ngOnInit(): void {
    this.dataTecnologia.getTecnologia().subscribe(data => {
      //console.log(data);
        this. myTecnologia = data;
      });
  }

  createTecno(){
    const {
      id,
      descripcionHabilidades,
      porcentajeHabilidades
    } = this
    const createTecno = {
      id,
      descripcionHabilidades,
      porcentajeHabilidades
    }

    this.dataTecnologia.addTecnologia(createTecno).subscribe(data => {
      this.dataTecnologia.getTecnologia().subscribe(data => {
        //console.log(data);
          this. myTecnologia = data;

          this.id=0;
          this.descripcionHabilidades="";
          this.porcentajeHabilidades="";
        });
    });
  }

  editTecno(id:number){
    this.dataTecnologia.getTecnologiaId(id).subscribe(data => {
      console.log(data.id);
       console.log(data);
        // this.myExperienciaId = data;
         this.id = (data.id);
         this.descripcionHabilidades=(data.descripcionHabilidades);
         this.porcentajeHabilidades=(data.porcentajeHabilidades);

      });
  }

  updateTecno(){
    const  {
      id,
      descripcionHabilidades,
      porcentajeHabilidades
    } = this
    const updateTec = {
      id,
      descripcionHabilidades,
      porcentajeHabilidades
    }
    this.dataTecnologia.updateTecnologia(id, updateTec).subscribe((data: any) =>{

    this.dataTecnologia.getTecnologia().subscribe(data => {
       //console.log(data);
         this.myTecnologia = data;
         this.descripcionHabilidades="";
         this.porcentajeHabilidades="";

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
