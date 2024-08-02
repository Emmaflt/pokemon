import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pokemons } from '../../data/entity/pokemons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generation-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './generation-detail.component.html',
  styleUrls: ['./generation-detail.component.css']
})
export class GenerationDetailComponent implements OnInit {
  generationId!: number;
  public id!: string | null;


  pokemons: Pokemons[] = [
    new Pokemons(1, 'Bulbizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 0.7, 6.9, 1),
    new Pokemons(2, 'Herbizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 1.0, 13.0, 1),
    new Pokemons(3, 'Florizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 2.0, 100.0, 1),
    new Pokemons(4, 'Salamèche', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu', 0.6, 8.5, 1),
    new Pokemons(5, 'Reptincel', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu', 1.1, 19.0, 1),
    new Pokemons(6, 'Dracaufeu', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu, vol', 1.7, 90.5, 2)
  ];
  generationPokemons: Pokemons[] = [];


  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.generationId = +params.get('id')!;
      this.generationPokemons = this.pokemons.filter(pokemon => pokemon.gen === this.generationId);
    });
  }
}