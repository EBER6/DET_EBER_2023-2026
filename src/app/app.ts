import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="heart-particles">
      @for (p of particles; track $index) {
        <div class="heart-particle" 
          [style.left.%]="p.left" 
          [style.animation-duration.s]="p.duration" 
          [style.animation-delay.s]="p.delay"
          [style.transform]="'scale(' + p.scale + ') rotate(45deg)'"
        ></div>
      }
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  particles: any[] = [];

  ngOnInit() {
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        left: Math.random() * 100,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        scale: 0.5 + Math.random() * 1
      });
    }
  }
}
