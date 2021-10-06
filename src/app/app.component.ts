import { Component } from '@angular/core';
import {PersonaModel} from "./core/models/persona.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isc-proyecto-VB';
  text = '';
  aux = '';
  list : String[]= ['Juan','Pedro','Maria','Mirian'];
  personas: PersonaModel[]= [{id: 1, dni: '40786862', nombres:'Juan', apellidos:'Quispe Huaman', edad: 23},
                            {id: 2, dni: '40786834', nombres:'Mario', apellidos:'Ruiz Huaman', edad: 12},
                            {id: 3, dni: '40786856', nombres:'Aveluz', apellidos:'Huaman Huaman', edad: 26},
                            {id: 4, dni: '40786878', nombres:'Pedro', apellidos:'Zea Huaman', edad: 34}];

  public obtenerTexto(valor : string): void {
    this.aux = valor;
  }

  eliminarElemento(index: number):void{
    this.list.splice(index,1);
  }

  agregarElemento(item: string): void{
    this.list[this.list.length] = item;
  }

  eliminarPersona(index: number, id: number): void{
    //eliminar de la BD
    this.personas.splice(index,1);
  }
}
