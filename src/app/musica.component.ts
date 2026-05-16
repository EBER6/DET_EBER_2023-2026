import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass music-container">
      <div class="player-header">
        <span class="music-icon">🎵</span>
        <div class="song-info">
          <span class="title">Lobo Solitario</span>
          <span class="artist">Yarita Lizeth x Alejandro Paucar</span>
        </div>
      </div>
      <audio controls class="local-audio">
        <source src="lobo.mp3.mpeg" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  `,
  styles: [`
    .music-container {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 1.2rem;
      width: 90%;
      max-width: 400px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
    }
    .player-header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .music-icon {
      font-size: 1.5rem;
      animation: rotate 4s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .song-info {
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--pastel-pink);
    }
    .artist {
      font-size: 0.8rem;
      opacity: 0.7;
    }
    .local-audio {
      width: 100%;
      height: 40px;
      filter: invert(1) hue-rotate(180deg) brightness(1.5); /* Estilo para que combine con el tema oscuro */
    }
    @media (max-width: 600px) {
      .music-container {
        bottom: 1rem;
        padding: 1rem;
      }
    }
  `]
})
export class MusicaComponent {}
