import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true, // 👈 más limpio con Standalone Components
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css'],
})
export class Experience {
  experiencias = [
    {
      fecha: 'Enero 2025 – Abril 2025',
      empresa: 'DTI Consultores',
      puesto: 'Desarrollador Fullstack',
      descripcion: [
        `Participé en el desarrollo completo de un sistema avanzado de reservas para hoteles, incorporando funcionalidades robustas como autenticación segura de usuarios, gestión dinámica de habitaciones y control en tiempo real de la disponibilidad. Utilicé Angular para construir un frontend interactivo y responsivo, mientras que el backend se desarrolló con Laravel siguiendo los principios RESTful, garantizando una arquitectura escalable y mantenible.`,
        `Paralelamente, diseñé e implementé una aplicación móvil dirigida a usuarios del sector fitness, que permite el seguimiento detallado de rutinas de entrenamiento, planes personalizados de alimentación y monitoreo del progreso físico. La app fue desarrollada con Ionic para ofrecer una experiencia multiplataforma fluida, respaldada por un backend sólido en Laravel que asegura la integridad y seguridad de los datos del usuario.`,
      ],
    },
    {
      fecha: 'Mayo 2022 – Agosto 2022',
      empresa: 'dvinternet',
      puesto: 'Desarrollador Fullstack',
      descripcion: [
        `Lideré el diseño y desarrollo de un sistema integral de gestión de clientes utilizando Laravel y Angular,
        que permitió optimizar significativamente los procesos internos administrativos de la empresa. Este sistema facilitó la automatización de tareas repetitivas y mejoró la eficiencia en el manejo de la información, contribuyendo a una reducción notable de errores y tiempos de respuesta.`,
        `Además, diseñé y desarrollé la página web corporativa utilizando tecnologías como HTML, CSS y PHP, implementando un diseño responsivo y accesible que mejoró la experiencia de usuario y fortaleció la imagen digital de la empresa. Esta iniciativa resultó en un aumento considerable en la captación de nuevos clientes y en la visibilidad online de la marca.`,
      ],
    },
  ];
}
