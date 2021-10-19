import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres-en-raya',
  templateUrl: './tres-en-raya.component.html',
  styleUrls: ['./tres-en-raya.component.scss']
})
export class TresEnRayaComponent implements OnInit {
  jugar: string;
  pj : string;
  sj : string;
  p1 : string;
  p2 : string;
  p3 : string;
  p4 : string;
  p5 : string;
  p6 : string;
  p7 : string;
  p8 : string;
  p9 : string;

  constructor() {
    this.jugar = '';
    this.pj='';
    this.sj='';
    this.p1='';
    this.p2='';
    this.p3='';
    this.p4='';
    this.p5='';
    this.p6='';
    this.p7='';
    this.p8='';
    this.p9='';
  }

  ngOnInit(): void {
  }
  public marcarElemento(index: number, valor:string):void{
    console.log('Elemento : '+ index);
    switch (index) {
      case 1:
        if(this.p1 === ''){
        this.p1 = this.jugar;
        this.jugar = this.siguienteJugador(this.p1);
        }
        break;
      case 2:
        if(this.p2 === '') {
          this.p2 = this.jugar;
          this.jugar = this.siguienteJugador(this.p2);
        }
        break;
      case 3:
        if(this.p3 === '') {
          this.p3 = this.jugar;
          this.jugar = this.siguienteJugador(this.p3);
        }
        break;
      case 4:
        if(this.p4 === '') {
          this.p4 = this.jugar;
          this.jugar = this.siguienteJugador(this.p4);
        }
        break;
      case 5:
        if(this.p5 === '') {
          this.p5 = this.jugar;
          this.jugar = this.siguienteJugador(this.p5);
        }
        break;
      case 6:
        if(this.p6 === '') {
          this.p6 = this.jugar;
          this.jugar = this.siguienteJugador(this.p6);
        }
        break;
      case 7:
        if(this.p7 === '') {
          this.p7 = this.jugar;
          this.jugar = this.siguienteJugador(this.p7);
        }
        break;
      case 8:
        if(this.p8 === '') {
          this.p8 = this.jugar;
          this.jugar = this.siguienteJugador(this.p8);
        }
        break;
      case 9:
        if(this.p9 === '') {
          this.p9 = this.jugar;
          this.jugar = this.siguienteJugador(this.p9);
        }
        break;
    }
  }

  public iniciarJuego():void{
    if(this.pj === '' && this.sj === '') {
      if (Math.floor(Math.random()*10)<5) {
        this.pj = 'X';
        this.sj = 'O';
        this.jugar = 'X';
      } else {
        this.pj = 'O';
        this.sj = 'X';
        this.jugar = 'O';
      }
    }else{
      console.log('Juego en proceso')
    }
  }
  public resetJuego(): void{
    this.pj = '';
    this.sj = '';
    this.p1='';
    this.p2='';
    this.p3='';
    this.p4='';
    this.p5='';
    this.p6='';
    this.p7='';
    this.p8='';
    this.p9='';
  }

  public siguienteJugador(item: string): string{
    if(item === 'X'){
      return 'O';
    }else{
      return 'X';
    }
  }
}
