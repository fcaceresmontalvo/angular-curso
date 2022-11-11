import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Capitan America'];
  heroeBorrado: string = '';
  //heroeBorrado: string|undefined = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() ||'';

    console.log ("Hemos borrado a " + this.heroeBorrado);
  }
}
