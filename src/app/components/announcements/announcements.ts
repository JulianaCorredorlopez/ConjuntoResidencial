import { Component } from '@angular/core';
import { ANUNCIOS, type Anuncio } from '../../core/conjunto-data';

const ICONOS_TIPO: Record<Anuncio['tipo'], string> = {
  aviso: '📢',
  mantenimiento: '🛠️',
  asamblea: '🗳️',
  seguridad: '🛡️',
};

@Component({
  selector: 'app-announcements',
  imports: [],
  templateUrl: './announcements.html',
  styleUrl: './announcements.scss',
})
export class Announcements {
  protected readonly anuncios = ANUNCIOS;

  iconoPara(tipo: Anuncio['tipo']): string {
    return ICONOS_TIPO[tipo];
  }
}
