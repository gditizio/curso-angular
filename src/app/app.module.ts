import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { Contador2Component } from './contador2/contador2.component';
import { BotonesComponent } from './botones/botones.component';
import { ImagesComponent } from './images/images.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [			
    AppComponent,
    ContadorComponent,
    Contador2Component,
      BotonesComponent,
      ImagesComponent,
      FormularioComponent
   ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
