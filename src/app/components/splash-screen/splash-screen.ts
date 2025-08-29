import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  templateUrl: './splash-screen.html',
  styleUrl: './splash-screen.css',
})
export class SplashScreen {
  @Input() show = true;

  ngOnInit() {
    setTimeout(() => {
      this.show = false;

      // Asegurar que la página quede en la parte superior
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 1000); // dura 3 segundos
  }
}
