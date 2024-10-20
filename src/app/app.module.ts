import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovingBallsBannerComponent } from './components/moving-balls-banner/moving-balls-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SitiwebComponent } from './pages/servizi/sitiweb/sitiweb.component';
import { SocialmediaComponent } from './pages/servizi/socialmedia/socialmedia.component';
import { DigitalidendityComponent } from './pages/servizi/digitalidendity/digitalidendity.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovingBallsBannerComponent,
    HomeComponent,
    ServiziComponent,
    SitiwebComponent,
    SocialmediaComponent,
    DigitalidendityComponent,
    ChisiamoComponent,
    ContattiComponent,
    ScrollAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  // aggiungere queste due cose per far funzionare il refresh delle pagine
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
