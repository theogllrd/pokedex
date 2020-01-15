import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { AuthentificationModule } from './authentification/authentification.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
