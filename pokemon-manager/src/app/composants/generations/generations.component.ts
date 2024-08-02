import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Generations } from '../../data/entity/generations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  generations: Generations[] = [
    new Generations(0, 'Génération I'),
    new Generations(1, 'Génération II'),
    new Generations(2, 'Génération III'),
    new Generations(3, 'Génération IV'),
    new Generations(4, 'Génération V'),
    new Generations(5, 'Génération VI'),
    new Generations(6, 'Génération VII')
  ];
}
