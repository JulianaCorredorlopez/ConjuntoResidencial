import { Component } from '@angular/core';
import { ADMINISTRACION } from '../../core/conjunto-data';

@Component({
  selector: 'app-administration',
  imports: [],
  templateUrl: './administration.html',
  styleUrl: './administration.scss',
})
export class Administration {
  protected readonly admin = ADMINISTRACION;
}
