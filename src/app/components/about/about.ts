import { Component } from '@angular/core';
import { CONJUNTO } from '../../core/conjunto-data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly conjunto = CONJUNTO;
}
