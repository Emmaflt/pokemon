import { Component } from '@angular/core';
import { Pokemons } from '../../data/entity/pokemons';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent {
  pokemons: Pokemons[] = [
    new Pokemons(1, 'Bulbizarre', 'url_to_bulbizarre_image', 'plante, poison', 0.7, 6.9, 1),
    new Pokemons(2, 'Herbizarre', 'url_to_herbizarre_image', 'plante, poison', 1.0, 13.0, 1),
    new Pokemons(3, 'Florizarre', '', 'plante, poison', 2.0, 100.0, 1),
    new Pokemons(4, 'Salamèche', '', 'feu', 0.6, 8.5, 1),
    new Pokemons(5, 'Reptincel', '', 'feu', 1.1, 19.0, 1),
    new Pokemons(6, 'Dracaufeu', '', 'feu, vol', 1.7, 90.5, 2)
  ];
}