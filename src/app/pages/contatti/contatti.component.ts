import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { PrivacyService } from '../../services/privacy.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit, AfterViewInit {

  isFormVisible = false;
  constructor(private privacyService:PrivacyService){}

  @ViewChild('primodiv', { static: false }) primodiv!: ElementRef<HTMLDivElement>;
  @ViewChild('secondodiv', { static: false }) secondodiv!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.privacyService.getPrivacyAcceptedObservable().subscribe(accepted => {
      this.isFormVisible = accepted; // Aggiorna la visibilità del form
    });
  }
  ngAfterViewInit(): void {
   
    // let tl = gsap.timeline();

    if (this.primodiv) {
      gsap.from(this.primodiv.nativeElement, {
        autoAlpha: 0,
       
        duration: 1,
        ease: 'power1.in',
        delay:1
      });
    }

    // if (this.secondodiv) {
    //   tl.from(this.secondodiv.nativeElement, {
    //     x: 2000,
    //     autoAlpha: 0,
    //     duration: 1,
    //     ease: 'cirpower1.inc',
    //   });
    // }

  }

}
