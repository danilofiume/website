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
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css',
})
export class ChisiamoComponent implements OnInit, AfterViewInit {
  @ViewChild('titolo', { static: false }) titolo!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafo', { static: false })
  paragrafo!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafo2', { static: false })
  paragrafo2!: ElementRef<HTMLDivElement>;
  @ViewChild('danilofiumediv', { static: false })
  danilofiumediv!: ElementRef<HTMLDivElement>;
  @ViewChild('titolodanilofiume', { static: false })
  titolodanilofiume!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafodanilofiume', { static: false })
  paragrafodanilofiume!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafodanilofiume1', { static: false })
  paragrafodanilofiume1!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafodanilofiume2', { static: false })
  paragrafodanilofiume2!: ElementRef<HTMLDivElement>;
  @ViewChild('cosafacciamodiv', { static: false })
  cosafacciamodiv!: ElementRef<HTMLDivElement>;
  @ViewChild('titolocosafacciamo', { static: false })
  titolocosafacciamo!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafocosafacciamo', { static: false })
  paragrafocosafacciamo!: ElementRef<HTMLDivElement>;
  @ViewChild('cosafacciamoservizio1', { static: false })
  cosafacciamoservizio1!: ElementRef<HTMLDivElement>;
  @ViewChild('cosafacciamoservizio2', { static: false })
  cosafacciamoservizio2!: ElementRef<HTMLDivElement>;
  @ViewChild('cosafacciamoservizio3', { static: false })
  cosafacciamoservizio3!: ElementRef<HTMLDivElement>;
  @ViewChild('paragrafocosafacciamo1', { static: false })
  paragrafocosafacciamo1!: ElementRef<HTMLDivElement>;
  

  constructor() {
    gsap.registerPlugin(ScrollTrigger); // Registra il plugin ScrollTrigger
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // Aggiungi una classe al body per bloccare lo scroll

    let tl = gsap.timeline({});

    if (this.titolo) {
      tl.from(this.titolo.nativeElement, {
            
        autoAlpha: 0,
        duration: 1,
        ease: 'power1.in',
        delay:1
      });
    }

    if (this.paragrafo) {
      tl.from(this.paragrafo.nativeElement, {
        autoAlpha: 0,
        duration: 1,
        ease: 'power1.in',
      });
    }

    if (this.paragrafo2) {
      tl.from(this.paragrafo2.nativeElement, {
        
        autoAlpha: 0,
        duration: 1,
        ease: 'power1.in',
      });
    }

    

 
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: this.danilofiumediv.nativeElement,
        start: 'top center', // Inizia l'animazione quando l'inizio del trigger raggiunge il centro della viewport
        end: 'bottom bottom', // Termina l'animazione quando la parte inferiore del trigger raggiunge la parte inferiore della viewport
        // scrub: true, // Sincronizza l'animazione con lo scroll
        // markers: true, // Mostra i marker per il debug
      }
    });
    
    // Definisci le animazioni nella timeline
    tl1
      .from(this.titolodanilofiume.nativeElement, {
      
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'start') // Sincronizza l'animazione con l'inizio della timeline
      .from(this.paragrafodanilofiume.nativeElement, {
        x: 2000,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, '-=0.5') // Inizia questa animazione 0.5 secondi prima della precedente
      .from(this.paragrafodanilofiume1.nativeElement, {
        x: -2000,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, '-=0.5')
      .from(this.paragrafodanilofiume2.nativeElement, {
        x: 2000,
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, '-=0.5');

      
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: this.cosafacciamodiv.nativeElement,
        start: 'top center', // Inizia l'animazione quando l'inizio del trigger raggiunge il centro della viewport
        end: 'bottom bottom', // Termina l'animazione quando la parte inferiore del trigger raggiunge la parte inferiore della viewport
        // scrub: true, // Sincronizza l'animazione con lo scroll
        // markers: true, // Mostra i marker per il debug
      }
    });
    
    // Definisci le animazioni nella timeline
    tl2
      .from(this.titolocosafacciamo.nativeElement, {
      
        autoAlpha: 0,
        duration: 2,
        ease: 'power2.inOut'
      }, 'start') // Sincronizza l'animazione con l'inizio della timeline
    
      .from(this.cosafacciamoservizio1.nativeElement, {
        
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, '-=0.5')
      .from(this.cosafacciamoservizio2.nativeElement, {
       
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, '-=0.5')
      .from(this.cosafacciamoservizio3.nativeElement, {
       
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      }, '-=0.5')
     

  }
}
