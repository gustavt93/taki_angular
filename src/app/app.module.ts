import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TakiRoutingModule } from './taki-routing/taki-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CancionComponent } from './components/cancion/cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToolbarComponent,
    InicioComponent,
    CancionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TakiRoutingModule,
    HttpClientModule,
    FormsModule
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
