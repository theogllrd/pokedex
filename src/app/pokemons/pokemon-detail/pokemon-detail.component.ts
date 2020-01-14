import { PokemonService } from './../pokemon.service';
import { Component, OnChanges, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  pokemon$: Observable<Pokemon>;
  // private id: number;

  @Input() pokemonId;


  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private location: Location) { }

  ngOnChanges() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.getPokemonDetail();
  }

  playSound(): void {
    // document.getElementById('audio').play();
  }


  getPokemonDetail(){
    console.log('je get le pokemon ' + this.pokemonId);
    this.pokemon$ = this.pokemonService.getPokemonsById(this.pokemonId);
  }
}
