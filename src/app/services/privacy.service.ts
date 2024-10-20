import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivacyService {
  private acceptedKey = 'cookieConsent';
  private privacyAccepted$ = new BehaviorSubject<boolean>(this.isPrivacyAccepted());

  constructor() {}

  isPrivacyAccepted(): boolean {
    return localStorage.getItem(this.acceptedKey) === 'accepted';
  }

  setPrivacyAccepted(accepted: boolean): void {
    localStorage.setItem(this.acceptedKey, accepted ? 'accepted' : 'declined');
    this.privacyAccepted$.next(accepted);
  }

  getPrivacyAcceptedObservable() {
    return this.privacyAccepted$.asObservable();
  }
}
