import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  private animationApplied = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.animationApplied) {
      const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementPosition < viewportHeight - 50) {
        this.applyAnimation();
      }
    }
  }

  private applyAnimation() {
    // Aggiungi qui la logica per animare l'elemento
    this.renderer.addClass(this.el.nativeElement, 'visible');
    this.animationApplied = true; // Imposta il flag per evitare di riapplicare l'animazione
  }
}
