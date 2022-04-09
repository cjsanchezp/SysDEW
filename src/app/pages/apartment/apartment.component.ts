import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  projects: any = [];
  apartments: any = [];

  constructor(
    private readonly ps:ProjectService, //servicio de proyectos
    private readonly as:ApartmentService, //servicio de departamentos
    private ar:ActivatedRoute //ActivatedRoute
  ) { }

__obtenerProyecto(idproyecto: number){
  this.ps.__getProjects().subscribe((rest: any) => {
    this.projects = rest.data.filter((item: {id: number}) => item.id == idproyecto);
  })
}

__obtenerDepartamento(iddepartamento: number){
  this.as.__getApartments().subscribe((rest: any) => {
    this.apartments = rest.data.filter((item: {id: number}) => item.id == iddepartamento);
  })
}
  //cuando cargue la pagina validaremos los 2 parametros, que se estan enviando
  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["idproyecto"] && p["id"]){
        this.__obtenerProyecto(p["idproyecto"]);
        this.__obtenerDepartamento(p["id"]);
      }
    })
  }

}
