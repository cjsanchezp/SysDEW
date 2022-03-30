import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  registerApartamentForm = this.fb.group({
    tipo: ['', Validators.required], 
    nombre: ['', Validators.required],
    area: ['', Validators.required],
    piso: ['', Validators.required]
  });

  __onSubmit(){
    if (this.registerApartamentForm.valid) {
      console.log(this.registerApartamentForm.value)
    } else {
      Swal.fire("Formulario no Valido")
    }
  }
 

  ngOnInit(): void {
  }

}
