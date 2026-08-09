import { Component } from '@angular/core';
import { AMENIDADES } from '../../core/conjunto-data';

@Component({
  selector: 'app-amenities',
  imports: [],
  templateUrl: './amenities.html',
  styleUrl: './amenities.scss',
})
export class Amenities {
  protected readonly amenidades = AMENIDADES;
}
