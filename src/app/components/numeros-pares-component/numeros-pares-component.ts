import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  templateUrl: './numeros-pares-component.html',
})

export class NumerosParesComponent {
  @ViewChild("cajainicio") cajainicio!: ElementRef;
  @ViewChild("cajafin") cajafin!: ElementRef;

  arrayNumeros: number[];

  constructor() {
    this.arrayNumeros = [];
  }

  mostrarPares(): void {
    let inicio = parseInt(this.cajainicio.nativeElement.value);
    let fin = parseInt(this.cajafin.nativeElement.value);

    //Necesito bucle for para recorrer los numeros entre inicio y fin
    for (let i = inicio; i <= fin; i++){
      //Si el numero es par
      if(i % 2 == 0){
        this.arrayNumeros.push(i);
      }
    }
  }
}
