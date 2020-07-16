import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoronaService } from './services/corona.service';
import { IndiaDataComponent } from './india-data/india-data.component';
const routes: Routes = [
  
  { path: 'indiadata',        component: IndiaDataComponent },
  { path: 'coronavirus',        component: CoronavirusComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'contact',        component: ContactComponent  },
  { path: 'port',        component: PortfolioComponent  },
 
  { path: '',   redirectTo: '/coronavirus', pathMatch: 'full' },
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
