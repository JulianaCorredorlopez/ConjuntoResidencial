import { Component } from '@angular/core';
import { GALERIA, type ItemGaleria } from '../../core/conjunto-data';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly galeria = GALERIA;

  gradientePara(item: ItemGaleria): string {
    return `linear-gradient(135deg, ${item.color1} 0%, ${item.color2} 100%)`;
  }
}
