import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './sections/home/home';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Formacion } from './sections/formacion/formacion';
import { Experience } from './sections/experience/experience';
import { About } from './sections/about/about';
import { ScrollTop } from './components/scroll-top/scroll-top';
// import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer,
    Home,
    Projects,
    Skills,
    Formacion,
    Experience,
    About,
    ScrollTop,
    // Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Portafolio-web';
}
