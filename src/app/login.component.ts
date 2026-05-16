import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page" [@pageFade]>
      <div class="glass login-card" [class.shake]="isError">
        <div class="header">
          <span class="heart-icon">❤️</span>
          <h1>NUESTRO ANIVERSARIO</h1>
          <p>PARA ENTRAR PON LA FECHA CORRECTA</p>
        </div>
        
        <div class="input-group">
          <input 
            type="date" 
            [(ngModel)]="specialDate" 
            (keyup.enter)="onLogin()"
            class="premium-input"
          >
          <div class="focus-border"></div>
        </div>

        <button (click)="onLogin()" class="login-btn">
          <span>Abrir Corazón</span>
        </button>

        @if (isError) {
          <p class="error-msg">FECHA INCORRECTA ¿NO ME DIGAS QUE NO RECUERDAS?...</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle at center, #1a1a2e 0%, #0f0c29 100%);
      z-index: 10;
      position: relative;
    }
    .login-card {
      padding: 3.5rem 2.5rem;
      width: 90%;
      max-width: 420px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .header h1 {
      font-size: 1.8rem;
      margin: 1rem 0;
      background: linear-gradient(to right, #ffb7c5, #ff007f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header p { opacity: 0.7; font-size: 0.95rem; margin-bottom: 2rem; }
    .heart-icon { font-size: 2.5rem; animation: pulse 1.5s infinite; display: block; }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .input-group { position: relative; margin-bottom: 2rem; }
    .premium-input {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 12px;
      color: white;
      font-size: 1.1rem;
      outline: none;
      transition: all 0.3s;
      text-align: center;
    }
    .premium-input:focus {
      border-color: var(--neon-pink);
      box-shadow: 0 0 15px rgba(255, 0, 127, 0.3);
    }

    .login-btn {
      width: 100%;
      padding: 16px;
      border: none;
      border-radius: 12px;
      background: linear-gradient(45deg, #ff007f, #7a00ff);
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 15px rgba(122, 0, 255, 0.4);
    }
    .login-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(122, 0, 255, 0.6);
    }

    .error-msg {
      margin-top: 1.5rem;
      color: #ff4d6d;
      font-size: 0.85rem;
      font-style: italic;
    }
  `],
  animations: [
    trigger('pageFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'scale(1.1)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  specialDate: string = '';
  isError: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.specialDate === '2023-05-11') {
      this.shootConfetti();
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      this.isError = true;
      setTimeout(() => this.isError = false, 500);
    }
  }

  private shootConfetti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb7c5', '#ff007f', '#00f2ff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb7c5', '#ff007f', '#00f2ff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }
}
