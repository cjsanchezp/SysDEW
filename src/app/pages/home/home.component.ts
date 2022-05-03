import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any = [];

  constructor(
    private readonly ps:ProjectService
  ) { }

  __obtenerProyectos(){
    this.ps.__getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
      //console.log(this.projects);      
    })
  }

  //__listar_proyectos(){
    //const token = sessionStorage.getItem('token')
   // const header = {Authorization: 'Bearer ' + token}

   // console.log(header)

    //this.ps.__be_listar_proyectos(header).subscribe((rest: any) => {
      //this.projects = rest.data;
      //console.log(this.projects);
    //})
  //}

  __listar_proyectos(){    
    this.ps.__be_listar_proyectos().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);
    })
  }

  ngOnInit(): void {
    //this.__obtenerProyectos();
    this.__listar_proyectos();
  }
  
}
