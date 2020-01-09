import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon;
  private id: number;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonsById(this.id).subscribe(
      result => {
        this.pokemon = result;
      }
    );
  }

  playSound(): void {
    // document.getElementById('audio').play();
  }

  goBack() {
    this.location.back();
  }
}
