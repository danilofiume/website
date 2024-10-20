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
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.css',
})
export class SocialmediaComponent implements OnInit, AfterViewInit {
  @ViewChild('boxcop1', { static: false }) boxcop1!: ElementRef<HTMLDivElement>;
  @ViewChild('titolo1', { static: false }) titolo1!: ElementRef<HTMLDivElement>;
  @ViewChild('sottotitolo1', { static: false })
  sottotitolo1!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonxx1', { static: false })
  buttonxx1!: ElementRef<HTMLDivElement>;

  @ViewChild('socialdiv1', { static: false }) socialdiv1!: ElementRef<HTMLDivElement>;
  @ViewChild('strategia', { static: false })
  strategia!: ElementRef<HTMLDivElement>;
  @ViewChild('strategiaimg', { static: false })
  strategiaimg!: ElementRef<HTMLDivElement>;

  @ViewChild('socialdiv2', { static: false }) socialdiv2!: ElementRef<HTMLDivElement>;
  @ViewChild('creazioneimg', { static: false })
  creazioneimg!: ElementRef<HTMLDivElement>;
  @ViewChild('creazione', { static: false })
  creazione!: ElementRef<HTMLDivElement>;

  @ViewChild('socialdiv3', { static: false }) socialdiv3!: ElementRef<HTMLDivElement>;
  @ViewChild('analisi', { static: false })
  analisi!: ElementRef<HTMLDivElement>;
  @ViewChild('analisimg', { static: false })
  analisimg!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger); // Registra il plugin ScrollTrigger
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // gsap.ticker.add(() => ScrollTrigger.refresh());

    // this.initializeAnimations();
  }

  private initializeAnimations(): void {
    if (this.boxcop1) {
      gsap.from(this.boxcop1.nativeElement, {
        autoAlpha: 0,
        duration: 1.5,
        ease: 'power1.in',
      });
    }



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.socialdiv1.nativeElement,
        start: '-100 center',
        end: 'bottom bottom',
        // scrub: true,
        // markers: true,
      },
    });

    tl.from(
      this.strategia.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      'start'
    ).from(
      this.strategiaimg.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=0.5'
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: this.socialdiv2.nativeElement,
        start: '-100 center',
        end: 'bottom bottom',
        // scrub: true,
        // markers: true,
      },
    });

    tl2.from(
      this.creazione.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      'start'
    ).from(
      this.creazioneimg.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=0.5'
    );


    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: this.socialdiv3.nativeElement,
        start: '-100 center',
        end: 'bottom bottom',
        // scrub: true,
        // markers: true,
      },
    });

    tl3.from(
      this.analisi.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      'start'
    ).from(
      this.analisimg.nativeElement,
      {
        autoAlpha: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
      '-=0.5'
    );
  }
}
