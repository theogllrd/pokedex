import { Pokemon } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PagedData } from '../models/pages-data.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons';
  private pokemonCount = 151;

  constructor(private http: HttpClient) { }


  getPokemons(): Observable<PagedData<Pokemon>> {
    const params = new HttpParams().set('limit', `${this.pokemonCount}`);
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl, { params});
  }

  getPokemonsById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonUrl + '/' + id);
  }

}
