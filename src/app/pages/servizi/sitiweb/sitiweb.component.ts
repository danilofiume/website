import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-sitiweb',
  templateUrl: './sitiweb.component.html',
  styleUrl: './sitiweb.component.css',
})
export class SitiwebComponent implements OnInit, AfterViewInit {
  // @ViewChild('boxcop', { static: false }) boxcop!: ElementRef<HTMLDivElement>;
  // @ViewChild('titolo', { static: false }) titolo!: ElementRef<HTMLDivElement>;
  // @ViewChild('sottotitolo', { static: false })
  // sottotitolo!: ElementRef<HTMLDivElement>;
  // @ViewChild('buttonxx', { static: false })
  // buttonxx!: ElementRef<HTMLDivElement>;
  // @ViewChild('divsitivetrina', { static: false })
  // divsitivetrina!: ElementRef<HTMLDivElement>;
  // @ViewChild('sitivetrina', { static: false })
  // sitivetrina!: ElementRef<HTMLDivElement>;
  // @ViewChild('imgsitivetrina', { static: false })
  // imgsitivetrina!: ElementRef<HTMLDivElement>;
  // @ViewChild('divecommerce', { static: false })
  // divecommerce!: ElementRef<HTMLDivElement>;
  // @ViewChild('imgecommerce', { static: false })
  // imgecommerce!: ElementRef<HTMLDivElement>;
  // @ViewChild('ecommerce', { static: false })
  // ecommerce!: ElementRef<HTMLDivElement>;

  // @ViewChild('divapplicazioni', { static: false })
  // divapplicazioni!: ElementRef<HTMLDivElement>;
  // @ViewChild('applicazioni', { static: false })
  // applicazioni!: ElementRef<HTMLDivElement>;
  // @ViewChild('imgapplicazioni', { static: false })
  // imgapplicazioni!: ElementRef<HTMLDivElement>;


  
  // constructor() {
  //   gsap.registerPlugin(ScrollTrigger); // Registra il plugin ScrollTrigger
  // }

  // ngOnInit(): void {}
  // ngAfterViewInit(): void {
 

  //   // if (this.boxcop) {
  //   //   gsap.from(this.boxcop.nativeElement, {
  //   //     autoAlpha: 0,
  //   //     duration: 1.5,
  //   //     ease: 'power1.in',
  //   //   });
  //   // }



    
  //   // const tl1 = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: this.divsitivetrina.nativeElement,
  //   //     start: '-100 center', // Inizia l'animazione quando l'inizio del trigger raggiunge il centro della viewport
  //   //     end: 'bottom bottom', // Termina l'animazione quando la parte inferiore del trigger raggiunge la parte inferiore della viewport
  //   //     // scrub: true, 
  //   //     // markers: true, // Mostra i marker per il debug
  //   //   },
  //   // });
    
  //   // // Definisci le animazioni nella timeline
  //   // tl1
  //   //   .from(this.sitivetrina.nativeElement, {
      
  //   //     autoAlpha: 0,
  //   //     duration: 1,
  //   //     ease: 'power2.inOut'
  //   //   }, 'start') // Sincronizza l'animazione con l'inizio della timeline
  //   //   .from(this.imgsitivetrina.nativeElement, {
    
  //   //     autoAlpha: 0,
  //   //     duration: 1,
  //   //     ease: 'power2.inOut'
  //   //   }, '-=0.5') // Inizia questa animazione 0.5 secondi prima della precedente
     


  //   //   const tl2 = gsap.timeline({
  //   //     scrollTrigger: {
  //   //       trigger: this.divecommerce.nativeElement,
  //   //       start: '-200 center', // Inizia l'animazione quando l'inizio del trigger raggiunge il centro della viewport
  //   //       end: 'bottom bottom', // Termina l'animazione quando la parte inferiore del trigger raggiunge la parte inferiore della viewport
  //   //       // scrub: true, 
  //   //       // markers: true, // Mostra i marker per il debug
  //   //     }
  //   //   });
      
  //   //   // Definisci le animazioni nella timeline
  //   //   tl2
  //   //     .from(this.imgecommerce.nativeElement, {
  
  //   //       autoAlpha: 0,
  //   //       duration: 1,
  //   //       ease: 'power2.inOut'
  //   //     }, 'start') // Sincronizza l'animazione con l'inizio della timeline
  //   //     .from(this.ecommerce.nativeElement, {
        
  //   //       autoAlpha: 0,
  //   //       duration: 1,
  //   //       ease: 'power2.inOut'
  //   //     }, '-=0.5') // Inizia questa animazione 0.5 secondi prima della precedente

  //   //     const tl3 = gsap.timeline({
  //   //       scrollTrigger: {
  //   //         trigger: this.divapplicazioni.nativeElement,
  //   //         start: '-200 center', // Inizia l'animazione quando l'inizio del trigger raggiunge il centro della viewport
  //   //         end: 'bottom bottom', // Termina l'animazione quando la parte inferiore del trigger raggiunge la parte inferiore della viewport
  //   //         // scrub: true, 
  //   //         // markers: true, // Mostra i marker per il debug
  //   //       }
  //   //     });
        
  //   //     // Definisci le animazioni nella timeline
  //   //     tl3
  //   //       .from(this.applicazioni.nativeElement, {
      
  //   //         autoAlpha: 0,
  //   //         duration: 1,
  //   //         ease: 'power2.inOut'
  //   //       }, 'start') // Sincronizza l'animazione con l'inizio della timeline
  //   //       .from(this.imgapplicazioni.nativeElement, {
          
  //   //         autoAlpha: 0,
  //   //         duration: 1,
  //   //         ease: 'power2.inOut'
  //   //       }, '-=0.5') // Inizia questa animazione 0.5 secondi prima della precedente
  


  // }
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  private isDragging = false;
  private startX:number  = 0;
  private scrollLeft: number = 0;
  

  constructor() { }

  ngOnInit(): void {
    
  }
  

  ngAfterViewInit() {
    const carouselElement = this.carousel.nativeElement;

    // Gestione dell'inizio del drag
    carouselElement.addEventListener('mousedown', this.startDrag.bind(this));
    carouselElement.addEventListener('mouseleave', this.endDrag.bind(this));
    carouselElement.addEventListener('mouseup', this.endDrag.bind(this));
    carouselElement.addEventListener('mousemove', this.drag.bind(this));

    // Gestione dello scroll touch
    carouselElement.addEventListener('touchstart', this.startTouch.bind(this));
    carouselElement.addEventListener('touchend', this.endTouch.bind(this));
    carouselElement.addEventListener('touchmove', this.touchMove.bind(this));

    // Prevenzione del drag delle immagini
    const images = carouselElement.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('dragstart', (event: DragEvent) => {
        event.preventDefault(); // Blocca il comportamento di default di drag delle immagini
      });
    });
  }

  private startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
  }

  private endDrag() {
    this.isDragging = false;
  }

  private drag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // La velocità dello scroll
    this.carousel.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  private startTouch(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].pageX - this.carousel.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel.nativeElement.scrollLeft;
  }

  private endTouch() {
    this.isDragging = false;
  }

  private touchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    const x = event.touches[0].pageX - this.carousel.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; // La velocità dello scroll
    this.carousel.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

}
