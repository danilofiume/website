import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-digitalidendity',
  templateUrl: './digitalidendity.component.html',
  styleUrls: ['./digitalidendity.component.css']
})
export class DigitalidendityComponent implements OnInit, AfterViewInit {

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


  // @ViewChild('boxcop2', { static: false }) boxcop2!: ElementRef<HTMLDivElement>;
  // @ViewChild('titolo2', { static: false }) titolo2!: ElementRef<HTMLDivElement>;
  // @ViewChild('sottotitolo2', { static: false }) sottotitolo2!: ElementRef<HTMLDivElement>;
  // @ViewChild('buttonxx2', { static: false }) buttonxx2!: ElementRef<HTMLDivElement>;
  // @ViewChild('divdesignbrand', { static: false }) divdesignbrand!: ElementRef<HTMLDivElement>;
  // @ViewChild('biglietti', { static: false }) biglietti!: ElementRef<HTMLDivElement>;
  // @ViewChild('tshirt', { static: false }) tshirt!: ElementRef<HTMLDivElement>;
  // @ViewChild('diario', { static: false }) diario!: ElementRef<HTMLDivElement>;
  // @ViewChild('tazze', { static: false }) tazze!: ElementRef<HTMLDivElement>;
  // @ViewChild('brochure', { static: false }) brochure!: ElementRef<HTMLDivElement>;

  // @ViewChild('brandingk', { static: false }) brandingk!: ElementRef<HTMLDivElement>;
  // @ViewChild('branding', { static: false }) branding!: ElementRef<HTMLDivElement>;
  // @ViewChild('brandingimg', { static: false }) brandingimg!: ElementRef<HTMLDivElement>;

  // constructor() {
  //   gsap.registerPlugin(ScrollTrigger); // Registra il plugin ScrollTrigger
  // }

  // ngOnInit(): void {}

  // ngAfterViewInit(): void {

  //   // Forza il refresh di ScrollTrigger per garantire che gli elementi siano correttamente posizionati
  //   // gsap.ticker.add(() => ScrollTrigger.refresh());

  //   // this.initializeAnimations();
  // }

  // private initializeAnimations(): void {
  //   if (this.boxcop2) {
  //     gsap.from(this.boxcop2.nativeElement, {
  //       autoAlpha: 0,
  //       duration: 1.5,
  //       ease: 'power1.in',
  //     });
  //   }

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: this.brandingk.nativeElement,
  //       start: '-100 center',
  //       end: 'bottom bottom',
  //       // scrub: true,
  //       // markers: true,
  //     },
  //   });

  //   tl
  //     .from(this.branding.nativeElement, {
  //       autoAlpha: 0,
  //       duration: 1,
  //       ease: 'power2.inOut'
  //     }, 'start')
  //     .from(this.brandingimg.nativeElement, {
  //       autoAlpha: 0,
  //       duration: 1,
  //       ease: 'power2.inOut'
  //     }, '-=0.5');

  //   this.setupScrollTrigger(this.divdesignbrand, 0.5);
  //   this.setupScrollTrigger(this.biglietti, 1);
  //   this.setupScrollTrigger(this.tshirt, 1);
  //   this.setupScrollTrigger(this.diario, 1);
  //   this.setupScrollTrigger(this.tazze, 1);
  //   this.setupScrollTrigger(this.brochure, 1);
  // }

  // private setupScrollTrigger(elementRef: ElementRef<HTMLDivElement>, duration: number): void {
  //   if (elementRef) {
  //     gsap.from(elementRef.nativeElement, {
  //       scrollTrigger: {
  //         trigger: elementRef.nativeElement,
  //         start: '-100 center',
  //         end: 'bottom bottom',
  //         // scrub: true,
  //         // markers: true,
  //       },
  //       autoAlpha: 0,
  //       duration: duration,
  //       ease: 'power1.in'
  //     });
  //   }
  // }





}
