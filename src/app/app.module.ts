import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import { ContadorComponent } from './contador/contador/contador.component'; => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...
//import { HeroeComponent } from './heroes/heroe/heroe.component'; => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...
//import { ListadoComponent } from './heroes/listado/listado.component'; => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent, => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...
    //HeroeComponent, => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...
    //ListadoComponent => Los vamos comentando porque vamos creando modulos independientes y los vamos sacando de este principal...
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
