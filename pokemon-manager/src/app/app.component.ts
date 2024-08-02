import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { GenerationDetailComponent } from './composants/generation-detail/generation-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsComponent, GenerationsComponent, GenerationDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-manager';
}
