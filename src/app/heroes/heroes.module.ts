//Tenemos que importar el NgModule
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Usamos el decorador NgModule
@NgModule({
    //Cosas que contiene el modulo (los componentes)
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //Cosas que sean visibles fuera del modulo
    exports: [
        ListadoComponent
    ],

    //Aqui van otros modulos
    imports: [
        //Para poder usar directivas de angular *ngFor...
        CommonModule
    ]
})

export class HeroesModule {}