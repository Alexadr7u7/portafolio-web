import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  descargando = false;

  descargarCV() {
    this.descargando = true;

    // Crear enlace de descarga
    const enlace = document.createElement('a');
    enlace.href = 'assets/CV-Alan-Alexander-Lazcano-Romero.pdf';
    enlace.download = 'CV-Alexander-Lazcano';
    enlace.click();

    // Simula tiempo de descarga (1.5s aprox.)
    setTimeout(() => {
      this.descargando = false;
    }, 1000);
  }
}
