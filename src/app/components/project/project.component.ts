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

  ngOnInit(): void {
    this.dataProyecto.getProyecto().subscribe(data => {
      //console.log(data);
        this.myProyecto = data;
      });
  }

}
