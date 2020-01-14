import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon$: Observable<Pokemon>;
  // private id: number;

  pokemonId: number;

  @Input()
  set id(id: number) {
    this.pokemonId = id;
    this.getPokemonDetail();
  }

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
  }

  playSound(): void {
    // document.getElementById('audio').play();
  }


  getPokemonDetail(){
    this.pokemon$ = this.pokemonService.getPokemonsById(this.pokemonId);
  }
}
