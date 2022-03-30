import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  registerProjectForm = this.fb.group({
    nombre: ['', Validators.required], 
    ubicacion: ['', Validators.required],
    precioBase: ['', Validators.required]
  });

  __onSubmit(){
    if (this.registerProjectForm.valid) {
      console.log(this.registerProjectForm.value)
    } else {
      Swal.fire("Formulario no Valido")
    }
  }

  ngOnInit(): void {
  }

}
