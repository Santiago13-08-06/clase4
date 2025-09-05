import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css'],
})
export class Ejercicio3Component {
  formulario!: FormGroup;
  registros: any[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Función para enviar los datos y registrarlos
  enviar() {
  if (this.formulario.valid) {
    this.registros.push(this.formulario.value);

    console.log(this.formulario.value);

    // Esto sirve para resetear los inputs
    this.formulario.reset();

    // Opcional: aseguramos que no queden errores arrastrados
    Object.keys(this.formulario.controls).forEach(key => {
      const control = this.formulario.get(key);
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
    });
  }
}
}
