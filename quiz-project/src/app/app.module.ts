import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StepsModule } from 'primeng/steps';
import { AppRoutingModule } from './app-routing.module';
import { FamiliaComponent } from './questions/familia/familia.component';
import { MusicaComponent } from './questions/musica/musica.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ComidaComponent } from './questions/comida/comida.component';
import { GeralComponent } from './questions/geral/geral.component';
import { SurpresaComponent } from './questions/surpresa/surpresa.component';
@NgModule({
  declarations: [
    AppComponent,
    FamiliaComponent,
    MusicaComponent,
    ComidaComponent,
    GeralComponent,
    SurpresaComponent,
  ],
  imports: [
    StepsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
