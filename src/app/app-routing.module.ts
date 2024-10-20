import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { SitiwebComponent } from './pages/servizi/sitiweb/sitiweb.component';
import { SocialmediaComponent } from './pages/servizi/socialmedia/socialmedia.component';
import { DigitalidendityComponent } from './pages/servizi/digitalidendity/digitalidendity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'servizi',
    component: ServiziComponent,
  },
  {
    path: 'sitiweb',
    component: SitiwebComponent,
  },
  {
    path: 'socialmedia',
    component: SocialmediaComponent,
  },
  {
    path: 'idenditàdigitale',
    component: DigitalidendityComponent,
  },
  {
    path: 'chisiamo',
    component: ChisiamoComponent,
  },
  {
    path: 'contatti',
    component: ContattiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
