import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('imgcopertina', { static: false })
  imgcopertina!: ElementRef<HTMLDivElement>;
  @ViewChild('titolo', { static: false }) titolo!: ElementRef<HTMLDivElement>;
  @ViewChild('titolo2', { static: false }) titolo2!: ElementRef<HTMLDivElement>;

  @ViewChild('titolo3', { static: false }) titolo3!: ElementRef<HTMLDivElement>;
  @ViewChild('pulsante', { static: false })
  pulsante!: ElementRef<HTMLDivElement>;

  @ViewChild('benvenutitext', { static: false })
  benvenutitext!: ElementRef<HTMLDivElement>;
  @ViewChild('benvenutiimg', { static: false })
  benvenutiimg!: ElementRef<HTMLDivElement>;
  @ViewChild('divbenvenuto', { static: false })
  divbenvenuto!: ElementRef<HTMLDivElement>;
  @ViewChild('barraservizi', { static: false })
  barraservizi!: ElementRef<HTMLDivElement>;
  @ViewChild('servizio1', { static: false })
  servizio1!: ElementRef<HTMLDivElement>;
  @ViewChild('servizio2', { static: false })
  servizio2!: ElementRef<HTMLDivElement>;
  @ViewChild('servizio3', { static: false })
  servizio3!: ElementRef<HTMLDivElement>;
  @ViewChild('barraperchesceglierci', { static: false })
  barraperchesceglierci!: ElementRef<HTMLDivElement>;
  @ViewChild('titoloperchesceglierci', { static: false })
  titoloperchesceglierci!: ElementRef<HTMLDivElement>;
  @ViewChild('passionecompetenza', { static: false })
  passionecompetenza!: ElementRef<HTMLDivElement>;
  @ViewChild('approcciopersonalizzato', { static: false })
  approcciopersonalizzato!: ElementRef<HTMLDivElement>;
  @ViewChild('risultatitangibili', { static: false })
  risultatitangibili!: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: false })
  title!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger); // Registra il plugin ScrollTrigger
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // const timeline = gsap.timeline();

   

    // timeline
    //   .from(this.titolo.nativeElement, {
    //     duration: 1.5,
        
    //     rotation: '-170_short',
    //     rotationX: '-=30_cw',
    //     rotationY: '1.5rad_ccw',
    //     // color: "#0ff",
    //     clearProps: 'scale,left',
    //     delay: 1,
    //     autoAlpha: 0,
    //   })
     
    //   .from(this.titolo2.nativeElement, {
    //     duration: 1.5,
    //     rotation: '170_short',
    //     rotationX: '-=80_cw',
    //     rotationY: '1.5rad_ccw',
    //     // color: "rgb(255, 0, 255)",

    //     clearProps: 'scale,left',

    //     autoAlpha: 0,
    //   })
     
    //   .from(this.titolo3.nativeElement, {
    //     duration: 1.5,
    //     rotation: '250_short',
    //     rotationX: '+=30_cw',
    //     rotationY: '1.5rad_ccw',
    //     // color: "blue",
    //     clearProps: 'scale,left',

    //     autoAlpha: 0,
    //   })
   
    //   .from(this.pulsante.nativeElement, {
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'power2.inOut',
    //   });

    // if (this.imgcopertina) {
    //   gsap.from(this.imgcopertina.nativeElement, {
    //     x: -2000,
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'circ',
    //     delay: 1,
    //   });
    // }
    // if (this.titolo) {
    //   gsap.from(this.titolo.nativeElement, {
    //     x: 2000,

    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'circ',
    //     delay: 1,
    //   });
    // }

    // if (this.benvenutitext) {
    //   gsap.from(this.benvenutitext.nativeElement, {
    //     scrollTrigger: {
    //       trigger: this.divbenvenuto.nativeElement,
    //       start: '-300 center', // Inizia quando la parte superiore dell'elemento entra al centro della viewport
    //       end: 'bottom center', // Termina quando la parte inferiore dell'elemento è al centro della viewport
    //       scrub: true, // Sincronizza l'animazione con lo scroll
    //       // markers: true // Mostra i marcatori di inizio e fine (utile per debug)
    //     },

    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'circ'
    //   });
    // }

    // if (this.benvenutiimg) {
    //   gsap.from(this.benvenutiimg.nativeElement, {
    //     scrollTrigger: {
    //       trigger: this.divbenvenuto.nativeElement,
    //       start: '-500 center', // Inizia quando la parte superiore dell'elemento entra al centro della viewport
    //       end: 'bottom center', // Termina quando la parte inferiore dell'elemento è al centro della viewport
    //       scrub: true, // Sincronizza l'animazione con lo scroll
    //       // markers: true // Mostra i marcatori di inizio e fine (utile per debug)
    //     },

    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'circ'
    //   });
    // }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.barraservizi.nativeElement,
        start: '-300 center',
        end: 'bottom center',
        scrub: true,
      },
    });

    tl.from(
      this.servizio1.nativeElement,
      { x: 200, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
      '-=0.5'
    )
      .from(
        this.servizio2.nativeElement,
        { x: 200, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      )
      .from(
        this.servizio3.nativeElement,
        { x: 200, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: this.barraperchesceglierci.nativeElement,
        start: '-300 center',
        end: 'bottom bottom',
        scrub: true,
        // markers:true
      },
    });

    tl1
      .from(
        this.titoloperchesceglierci.nativeElement,
        { x: -2000, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      )
      .from(
        this.passionecompetenza.nativeElement,
        { x: 2000, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      )
      .from(
        this.approcciopersonalizzato.nativeElement,
        { x: -2000, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.5'
      )
      .from(
        this.risultatitangibili.nativeElement,
        { x: 2000, autoAlpha: 0, duration: 1, ease: 'power2.inOut' },
        '+=0.5'
      );
  }
}
