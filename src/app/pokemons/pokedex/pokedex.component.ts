import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  id: number=1;

  constructor() { }

  ngOnInit() {
  }

  getPokemonDetail(id){
    this.id = id;
  }

}
