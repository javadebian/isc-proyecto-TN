import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PrimengModule } from './primeng/primeng.module';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    TresEnRayaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
