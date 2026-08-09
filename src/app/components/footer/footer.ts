import { Component } from '@angular/core';
import { CONJUNTO } from '../../core/conjunto-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly conjunto = CONJUNTO;
  protected readonly anioActual = new Date().getFullYear();
}
