import { Routes } from '@angular/router';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';


export const routes: Routes = [
    {path : '', component: PokemonsComponent},
    {path : 'tous-les-pokemons' , component: PokemonsComponent },
    // {path : 'pokemon/:id' , component: PokemonsComponent },

];

