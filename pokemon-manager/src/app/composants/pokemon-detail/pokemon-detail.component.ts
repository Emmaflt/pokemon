import { Component } from '@angular/core';
import { Pokemons } from '../../data/entity/pokemons';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemon!: Pokemons; // Pokémon à afficher
  pokemons: Pokemons[] = [
    new Pokemons(1, 'Bulbizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 0.7, 6.9, 1),
    new Pokemons(2, 'Herbizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 1.0, 13.0, 1),
    new Pokemons(3, 'Florizarre', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'plante, poison', 2.0, 100.0, 1),
    new Pokemons(4, 'Salamèche', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu', 0.6, 8.5, 1),
    new Pokemons(5, 'Reptincel', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu', 1.1, 19.0, 1),
    new Pokemons(6, 'Dracaufeu', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/346-iron-man.jpg', 'feu, vol', 1.7, 90.5, 1)
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.pokemon = this.pokemons.find(pokemon => pokemon.id === id)!;
  }
}
