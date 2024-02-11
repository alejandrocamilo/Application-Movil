import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TraductorPage implements OnInit {

  constructor() { }

  numero: number = 0
  resultado: string =""

  ngOnInit() {
  }

  traducir(): string {
    const unidades = ['cero','uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (this.numero > 0 && this.numero < 10) {
        return unidades[this.numero];

    } else if (this.numero >= 10 && this.numero < 20) {
        return especiales[this.numero - 10];

    } else if (this.numero >= 20 && this.numero < 100) {
        const decena = Math.floor(this.numero / 10);
        const unidad = this.numero % 10 === 0 ? '' : unidades[this.numero % 10];
        return decenas[decena - 2] + (unidad ? ' y ' + unidad : '');

    } else if (this.numero >= 100 && this.numero < 1000) {
        const centena = Math.floor(this.numero / 100);
        const decena = Math.floor((this.numero % 100) / 10);
        const unidad = this.numero % 10 === 0 ? '' : unidades[this.numero % 10];
        this.resultado = centenas[centena - 1];

        if (decena !== 0) {
            this.resultado += ' ' + decenas[decena - 2];
        }

        if (unidad) {
            this.resultado += ' ' + unidad;
        }
        return this.resultado;

    } else if (this.numero === 1000) {
        return 'mil';

    } else {
        return 'Número fuera de rango';
    }
}


}
