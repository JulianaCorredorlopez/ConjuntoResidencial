import { Component } from '@angular/core';
import { CONJUNTO, ADMINISTRACION } from '../../core/conjunto-data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly conjunto = CONJUNTO;
  protected readonly admin = ADMINISTRACION;
}
