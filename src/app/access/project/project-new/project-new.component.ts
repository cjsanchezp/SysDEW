import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ps: ProjectService,
    private router: Router
  ) { }

  projectForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: [0, Validators.required],
    direccion: ['', Validators.required],
    ubicacion: ['', Validators.required],
    images: this.fb.array([
      this.fb.group({
        nombre: ['', Validators.required],
        ruta: ['', Validators.required]
      })
    ])    
  })

  get imagesgroup() {
    return (<FormArray>(<FormGroup>this.projectForm).get('images')).controls;
  }

  __insert(data: any) {
    this.ps.__be_insert(data).subscribe((rest: any) => {
      if(rest.issuccess){
        alert("Proyecto creado con ID: " + rest.data.id);
        this.router.navigate(['home']);
      }else{
        alert(rest.errormessage);
      }

    })
  }

  __onSubmit(){
    if (this.projectForm.valid) {
      this.__insert(this.projectForm.value);
      //console.log(this.projectForm.value)
    } else {
      Swal.fire("Formulario no Valido")
    }
  }

  ngOnInit(): void {
  }

}
