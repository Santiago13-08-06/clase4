import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], 
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css'] 
})
export class Ejercicio2Component {
  nuevoTexto: string = '';   
  textos: string[] = [];     

  agregarTexto() {
    if (this.nuevoTexto.trim() !== '') {
      this.textos.push(this.nuevoTexto);
      this.nuevoTexto = ''; 
    }
  }

  eliminarTexto(index: number) {
    this.textos.splice(index, 1);
  }
}
