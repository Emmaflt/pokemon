import { Routes } from '@angular/router';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { GenerationDetailComponent } from './composants/generation-detail/generation-detail.component';
import { PokemonDetailComponent } from './composants/pokemon-detail/pokemon-detail.component';


export const routes: Routes = [
    {path : '', component: GenerationsComponent},
    {path : 'toutes-les-generations', component: GenerationsComponent},
    {path : 'tous-les-pokemons' , component: PokemonsComponent },
    {path : 'pokemons/:id' , component: PokemonDetailComponent },
    {path : 'generation-detail/:id' , component: GenerationDetailComponent },

];

