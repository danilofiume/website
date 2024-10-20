import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationCancel, NavigationError, Router, NavigationStart } from '@angular/router';
import { PrivacyService } from './services/privacy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'website';
  isOpen = false;
  isMainMenuOpen = false;
  openSubMenu: string | null = null;
  iconawhatsapp: boolean = false;
  loading = false;
  showCookiePopup = false;


  constructor(private router: Router, private privacyService:PrivacyService) {}

  ngOnInit(): void {

    setTimeout(() => {
      const consentGiven = localStorage.getItem('cookieConsent');
      if (!consentGiven) {
        this.showCookiePopup = true;
        setTimeout(() => {
          document.querySelector('.cookie-popup')?.classList.add('show-popup');
        }, 10); // Attiva l'animazione di discesa
      }
    }, 2000); // Mostra il popup dopo 1 secondo


    // Abbonati all'osservabile per aggiornare il popup se lo stato cambia
    this.privacyService.getPrivacyAcceptedObservable().subscribe(accepted => {
      this.showCookiePopup = !accepted; // Mostra il popup se non accettato
    });


    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.iconawhatsapp = false;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
        });

        setTimeout(() => {
          this.loading = false;
          this.iconawhatsapp = true;
        }, 1000); // Imposta un ritardo di 1 secondo
      }
    });

    // Log scroll position for debugging
    window.addEventListener('scroll', () => {
      console.log('Scroll Position:', window.scrollY);
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
    this.isMainMenuOpen = false;
    this.openSubMenu = null; // Chiudi tutti i sottomenu quando il menu principale è chiuso
  }

  toggleMainMenu(): void {
    this.isMainMenuOpen = !this.isMainMenuOpen;

    if (!this.isMainMenuOpen) {
      this.openSubMenu = null; // Chiudi tutti i sottomenu quando il menu principale è chiuso
    }
  }

  toggleSubMenu(subMenu: string, event: Event): void {
    event.stopPropagation(); // Previene la propagazione del click
    this.openSubMenu = this.openSubMenu === subMenu ? null : subMenu; // Apri/chiudi il sottomenu
    this.closeMenu(); // Chiudi il menu dopo che un elemento del sottomenu è stato cliccato
  }

  closeAllMenus() {
    this.isMainMenuOpen = false;
    this.openSubMenu = null;
  }




  // showCookiePopup = false;
  // acceptPrivacyAndCookies() {
  //   const popup = document.querySelector('.cookie-popup');
  //   if (popup) {
  //     popup.classList.remove('show-popup'); // Rimuove l'animazione di discesa
  //     popup.classList.add('hide-popup'); // Aggiunge l'animazione di risalita
  //   }

  //   // Attendi il termine dell'animazione prima di rimuovere il popup
  //   setTimeout(() => {
  //     this.showCookiePopup = false;
  //     localStorage.setItem('cookieConsent', 'accepted');
  //   }, 500); // Tempo di animazione (0.5 secondi)
  // }

  // declinePrivacyAndCookies() {
  //   const popup = document.querySelector('.cookie-popup');
  //   if (popup) {
  //     popup.classList.remove('show-popup');
  //     popup.classList.add('hide-popup');
  //   }

  //   setTimeout(() => {
  //     this.showCookiePopup = false;
  //     localStorage.setItem('cookieConsent', 'declined');
  //   }, 500);
  // }

  // openPrivacyPolicy() {
  //   alert('Privacy Policy: Raccogliamo i tuoi dati tramite un modulo di contatto fornito da terze parti come Formspree.');
  // }















  acceptPrivacyAndCookies() {
    this.privacyService.setPrivacyAccepted(true); // Usa il servizio
    const popup = document.querySelector('.cookie-popup');
    if (popup) {
      popup.classList.remove('show-popup');
      popup.classList.add('hide-popup');
    }

    setTimeout(() => {
      this.showCookiePopup = false;
    }, 500);
  }

  declinePrivacyAndCookies() {
    this.privacyService.setPrivacyAccepted(false); // Usa il servizio
    const popup = document.querySelector('.cookie-popup');
    if (popup) {
      popup.classList.remove('show-popup');
      popup.classList.add('hide-popup');
    }

    setTimeout(() => {
      this.showCookiePopup = false;
    }, 500);
  }

  openPrivacyPolicy() {
    alert('Privacy Policy: Raccogliamo i tuoi dati tramite un modulo di contatto fornito da terze parti come Formspree.');
  }
}
