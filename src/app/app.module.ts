import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoronaService } from './services/corona.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {ChartsModule} from 'ng2-charts'
import {CountUpModule} from 'ngx-countup';
import { IndiaDataComponent } from './india-data/india-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoronavirusComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    IndiaDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    ChartsModule,
    CountUpModule,
    ReactiveFormsModule,
    
    
  ],
  exports:[ MatSelectModule,MatCardModule,MatTableModule,],
  providers: [CoronaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
