import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroeBorrado: string = '';

  //Array de string donde se guardaran nombres de heroes
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitán América'];

  borrarHeroe() {
    //Si devuelve undefined que devuelva un string vacio
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
