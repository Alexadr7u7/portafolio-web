import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categorias: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'CSS', icon: 'css' },
        { name: 'Angular', icon: 'angular' },
        { name: 'HTML', icon: 'html' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'TailwindCSS', icon: 'tailwind' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'Astro', icon: 'astro' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', icon: 'php' },
        { name: 'C#', icon: 'cs' },
        { name: 'Java', icon: 'java' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Laravel', icon: 'laravel' },
        { name: '.NET', icon: 'dotnet' },
      ],
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'Postgres', icon: 'postgres' },
        { name: 'Firebase', icon: 'firebase' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'MySQL', icon: 'mysql' },
      ],
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'Discord', icon: 'discord' },
        { name: 'Figma', icon: 'figma' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Unity', icon: 'unity' },
        { name: 'NPM', icon: 'npm' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Vercel', icon: 'vercel' },
      ],
    },
  ];
}
