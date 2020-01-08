import { Pokemon } from './../../models/pokemon.model';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedData } from 'src/app/models/pages-data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  private pokemons: PagedData<Pokemon>;

  constructor(private pokemonService: PokemonService) { }

  

  ngOnInit() {

    this.pokemonService.getPokemons().subscribe(
      result => {
        this.pokemons = result;
      }
    )
  }




}
