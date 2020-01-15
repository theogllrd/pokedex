import { Pokemon } from './../../models/pokemon.model';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedData } from 'src/app/models/pages-data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private pokemons: PagedData<Pokemon>;
  private pokemonOffset = 0;
  private pokemonLimit = 10;
  private search: string;
  
  @Output() pokemonChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  getPokemon() {
    this.pokemonService.getPokemons(this.pokemonOffset, this.pokemonLimit).subscribe(
      result => {
        this.pokemons = result;
      }
    );
    console.log('ajout de pokemon');
    // this.pokemonOffset += 10;
    this.pokemonLimit += 10;
  }

  ngOnInit() {
    this.getPokemon();
  }

  onScroll() {
      console.log('scrolled!!');
      if( this.search === undefined || this.search === '') {
        this.getPokemon();
      }
  }

  getPokemonDetail(id: number){
    console.log('clic sur pokemon ' + id + ' dans list');
    this.pokemonChanged.emit(id);
  }

  searchPokemon(search) {
    this.search = search.target.value;
    if (this.search === '') { this.getPokemon(); } else {
      this.pokemonService.getPokemonsWithSearch(this.search).subscribe(
        result => {
          this.pokemons = result;
        }
      );
    }
    
  }


}
