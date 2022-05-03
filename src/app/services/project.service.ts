import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private readonly http:HttpClient
    
  ) { }

  __getProjects(){
    return this.http.get('/api/project/getprojects');    
  }

  //__be_listar_proyectos(headers:any){
    //return this.http.get('https://localhost:44309/api/project/listar', { headers });
  //}

  __be_listar_proyectos(){
    return this.http.get('https://localhost:44309/api/project/listar');
  }
    
  __be_obtener_proyecto(params: any){
    return this.http.get('https://localhost:44309/api/project/obtener' + params);
  }

  __be_insert(data: any, headers: any){
    return this.http.post<any>('https://localhost:44309/api/project/insert',data, {headers});
  }
}
