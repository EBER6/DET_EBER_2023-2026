import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="glass navbar-container">
      <div class="brand">
        <span class="heart">❤️</span>
        <span class="text">DESDE EL 11/05/2023 SOMOS NOVIOS MI AMOR</span>
      </div>
      
      <div class="timer">
        <div class="unit">
          <span class="value">{{ days() }}</span>
          <span class="label">Días</span>
        </div>
        <div class="unit">
          <span class="value">{{ hours() }}</span>
          <span class="label">Hrs</span>
        </div>
        <div class="unit">
          <span class="value">{{ mins() }}</span>
          <span class="label">Min</span>
        </div>
        <div class="unit">
          <span class="value">{{ secs() }}</span>
          <span class="label">Seg</span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-container {
      position: fixed;
      top: 1.5rem;
      left: 1.5rem;
      right: 1.5rem;
      padding: 0.8rem 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .brand { display: flex; align-items: center; gap: 0.8rem; }
    .brand .text { font-weight: 500; letter-spacing: 1px; color: var(--pastel-pink); }
    .heart { animation: beat 1.2s infinite; display: inline-block; }
    
    @keyframes beat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }

    .timer { display: flex; gap: 1.5rem; }
    .unit { display: flex; flex-direction: column; align-items: center; min-width: 45px; }
    .value { font-size: 1.4rem; font-weight: 700; font-family: 'Courier New', monospace; color: var(--neon-blue); text-shadow: 0 0 10px rgba(0, 242, 255, 0.4); transition: all 0.3s ease; }
    .label { font-size: 0.7rem; text-transform: uppercase; opacity: 0.7; letter-spacing: 1px; }

    @media (max-width: 768px) {
      .navbar-container { padding: 0.8rem 1.5rem; top: 1rem; left: 1rem; right: 1rem; }
      .brand .text { display: none; }
      .timer { gap: 1rem; }
      .value { font-size: 1.2rem; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  days = signal<string>('0');
  hours = signal<string>('00');
  mins = signal<string>('00');
  secs = signal<string>('00');
  
  private timerId: any;
  private startDate = new Date('2023-05-11T00:00:00');

  ngOnInit() {
    this.updateCounter();
    this.timerId = setInterval(() => this.updateCounter(), 1000);
  }

  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
  }

  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  updateCounter() {
    const now = new Date();
    const diff = now.getTime() - this.startDate.getTime();
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    this.days.set(d.toString());
    this.hours.set(this.formatNumber(h));
    this.mins.set(this.formatNumber(m));
    this.secs.set(this.formatNumber(s));
  }
}
