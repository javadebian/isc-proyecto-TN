import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  expReg: string;
  constructor() {
    this.expReg = '';
  }

  ngOnInit(): void {
  }

  operarCadena(valor: string): void{
    this.expReg += valor;
  }

  resetCalculadora(): void{
    this.expReg = '';
  }

  calcularOperaciones(): void{
    this.expReg = eval(this.expReg);
  }

}
