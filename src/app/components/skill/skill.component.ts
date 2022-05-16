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

  ngOnInit(): void {
    this.dataTecnologia.getTecnologia().subscribe(data => {
      //console.log(data);
        this. myTecnologia = data;
      });
  }

}
