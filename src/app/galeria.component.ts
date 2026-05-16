import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-wrapper" [@staggerFade]>
      @for (card of cards; track card.id) {
        <div class="glass card">
          <div class="image-container">
            <img [src]="card.imageUrl" [alt]="card.title">
            <div class="overlay"></div>
          </div>
          <div class="card-body">
            <h3>{{ card.title }}</h3>
            <p class="poem-text">{{ card.phrase }}</p>
          </div>
          <div class="card-glow"></div>
        </div>
      }
    </div>
  `,
  styles: [`
    .gallery-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
      padding: 8rem 2rem 10rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .card {
      position: relative;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      flex-direction: column;
      height: auto;
      min-height: 500px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.03);
    }
    .card:hover {
      transform: translateY(-10px);
      border-color: var(--neon-pink);
      box-shadow: 0 15px 45px rgba(255, 0, 127, 0.15);
    }
    .card:hover .card-glow { opacity: 1; }
    .card:hover img { transform: scale(1.05); }

    .image-container {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.2s ease;
    }
    .overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, transparent 50%, rgba(15, 12, 41, 0.8));
    }

    .card-body {
      padding: 2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      background: rgba(15, 12, 41, 0.4);
    }
    .card-body h3 {
      color: var(--pastel-pink);
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
    }
    .poem-text {
      color: var(--text-main);
      font-size: 1rem;
      line-height: 1.8;
      opacity: 0.95;
      font-style: italic;
      text-align: center;
      margin: 0;
      word-wrap: break-word;
    }

    .card-glow {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: radial-gradient(circle at center, rgba(255, 0, 127, 0.05) 0%, transparent 70%);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s;
    }

    @media (max-width: 600px) {
      .gallery-wrapper {
        grid-template-columns: 1fr;
        padding: 7rem 1rem 12rem;
        gap: 2rem;
      }
      .card { min-height: 450px; }
    }
  `],
  animations: [
    trigger('staggerFade', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class GaleriaComponent {
  cards = [
    { 
      id: 1, 
      title: 'El Inicio de Todo', 
      phrase: 'Desde el primer día que cruzamos miradas, supe que mi mundo ya no volvería a ser el mismo. Cada segundo a tu lado es un regalo que atesoro con el alma, y no cambiaría por nada la hermosa casualidad de haberte encontrado.',
      imageUrl: '2.jpg'
    },
    { 
      id: 2, 
      title: 'Mi Lugar Seguro', 
      phrase: 'No importa qué tan gris o complicado sea el día, me basta con ver tu sonrisa o refugiarme en tus abrazos para recordar que todo va a estar bien. Eres mi paz, mi calma y el lugar seguro al que siempre quiero regresar.',
      imageUrl: '3.jpg'
    },
    { 
      id: 3, 
      title: 'Complicidad Única', 
      phrase: 'Me encanta cómo nos entendemos con solo mirarnos, las risas compartidas por tonterías y la forma en que hacemos equipo ante todo. Eres mi amor, mi mejor amiga y mi cómplice favorita en esta gran aventura de la vida.',
      imageUrl: '4.jpg'
    },
    { 
      id: 4, 
      title: 'Amar Tu Esencia', 
      phrase: 'Te amo por cómo eres cuando estás conmigo, pero sobre todo por la increíble persona que eres con el mundo. Tu gran corazón, tu ternura y tu forma tan bonita de brillar me enamoran un poquito más cada día.',
      imageUrl: '2.jpg'
    },
    { 
      id: 5, 
      title: 'Un Futuro Juntos', 
      phrase: 'Cuando me imagino el futuro, no puedo evitar verte en él. Quiero seguir construyendo metas a tu lado, tomados de la mano, superando cualquier obstáculo y celebrando cada logro juntos, porque contigo el camino es perfecto.',
      imageUrl: '3.jpg'
    },
    { 
      id: 6, 
      title: 'Detalles que Enamoran', 
      phrase: 'Amo la magia que hay en nuestros momentos más simples: un café juntos, una canción compartida, caminar de la mano o simplemente quedarnos en silencio. Conectas conmigo de una forma que nadie más podría hacerlo.',
      imageUrl: '4.jpg'
    },
    { 
      id: 7, 
      title: 'Mi Mayor Bendición', 
      phrase: 'Si pudiera volver el tiempo atrás, te buscaría mucho antes para poder amarte más tiempo. Eres lo mejor que me ha pasado, mi mayor alegría y la razón por la que despierto cada mañana con ganas de ser una mejor versión de mí mismo.',
      imageUrl: '2.jpg'
    },
    { 
      id: 8, 
      title: 'Promesa de Amor', 
      phrase: 'Te elijo hoy, te elegiré mañana y te seguiré eligiendo todos los días de mi vida. Mi promesa contigo es cuidarte, respetarte y recordarte siempre lo valiosa y perfecta que eres para mí. Te amo con todo mi corazón.',
      imageUrl: '4.jpg'
    }
  ];
}