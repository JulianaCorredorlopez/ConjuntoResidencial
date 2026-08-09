import { Component } from '@angular/core';
import { CONJUNTO } from '../../core/conjunto-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly conjunto = CONJUNTO;
}
