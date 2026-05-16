import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { GaleriaComponent } from './galeria.component';
import { MusicaComponent } from './musica.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, GaleriaComponent, MusicaComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-galeria></app-galeria>
    </main>
    <app-musica></app-musica>
  `,
  styles: [`
    main {
      min-height: 100vh;
      overflow-x: hidden;
    }
  `]
})
export class DashboardComponent {}
