import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado =  this.heroes.shift() || '';
  }
}

