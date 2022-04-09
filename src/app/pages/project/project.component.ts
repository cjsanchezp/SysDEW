import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects : any = [];
  apartments: any = []; //propiedad para almacenar los valores de apartamentos

  constructor(
    private readonly ps:ProjectService,
    private readonly as: ApartmentService, //para conectar con servicio
    private ar: ActivatedRoute //para leer el parametro
  ) { }

  __ObtenerProyecto(idproyecto: number){
    this.ps.__getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: {id: number}) => item.id == idproyecto);
      console.log(this.projects);
    })
  }

  __ObtenerDepartamentos(idproyecto: number){
   this.as.__getApartments().subscribe((rest: any)=> {
     this.apartments = rest.data.filter((item: {projectId: number}) => item.projectId == idproyecto );
     console.log(this.apartments);
   }) 
  }
  //["id"] aqui ponemos el parametro que tenemos definido en el app-routong.module.ts
  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["id"]) {
        this.__ObtenerProyecto(p["id"]);
        this.__ObtenerDepartamentos(p["id"]);
      }
    })    
  }
}
