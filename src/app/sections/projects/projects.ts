import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  imagenSeleccionada: string | null = null;
  cantidadProyectosVisible: number = 4; // muestra inicialmente 4

  proyectos = [
    {
      titulo: 'dvinternet',
      descripcion:
        'Sitio web informativo para una empresa de internet, desarrollado con HTML, CSS y PHP, con diseño responsivo y formulario de contacto funcional.',
      imagen: 'assets/img/dvinternet.png',
      tecnologias: ['php', 'css', 'html', 'Mysql', 'Bootstrap'],
      fecha: '20 mayo 2022',
      demo: '#',
      github: '',
    },
    {
      titulo: 'dvinternet',
      descripcion:
        'Aplicación web desarrollada con Angular y Larvel para gestionar clientes, servicios, pagos y reportes administrativos de la empresa.',
      imagen: 'assets/img/dv-system.png',
      tecnologias: ['Angular', 'Mysql', 'Laravel', 'Bootstrap'],
      fecha: '22 abril 2022',
      demo: '#',
      github: '#',
    },
    {
      titulo: 'Roamsuite.com',
      descripcion:
        'Plataforma web creada con Angular y Laravel para gestionar reservas, disponibilidad de habitaciones y administración de hoteles en línea.',
      imagen: 'assets/img/roamsuite.png',
      tecnologias: ['Angular', 'Mysql', 'Laravel', 'Bootstrap'],
      fecha: '20 marzo 2025',
      demo: '#',
      github: '#',
    },
    {
      titulo: 'App móvil OlympusGym',
      descripcion:
        'Aplicación desarrollada en Ionic con Laravel como backend, enfocada en la gestión de rutinas, usuarios y control de asistencia para gimnasios.',
      imagen: 'assets/img/olympusgym.png',
      tecnologias: ['Angular', 'Mysql', 'Laravel', 'Scss', 'Ionic'],
      fecha: '20 abril 2025',
      demo: '#',
      github: '#',
    },
    {
      titulo: 'Rick and Morty Explorer',
      descripcion:
        'Aplicación web desarrollada con Angular y TailwindCSS que consume la API de Rick and Morty. Permite explorar personajes, episodios y ubicaciones con filtros avanzados, paginación y modales interactivos.',
      imagen: 'assets/img/rickandmorty.png',
      tecnologias: ['Angular', 'TailwindCSS', 'TypeScript'],
      fecha: '20 Julio 2025',
      demo: 'https://rickandmorty-api-two.vercel.app/',
      github: 'https://github.com/Alexadr7u7/rickandmorty-api.git',
    },
  ];
  abrirModal(url: string) {
    this.imagenSeleccionada = url;
  }

  cerrarModal() {
    this.imagenSeleccionada = null;
  }
  verMasProyectos(): void {
    const cantidadExtra = 4;
    this.cantidadProyectosVisible += cantidadExtra;
  }
}
