import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SumadoraPage implements OnInit {

  constructor() { }

  numero1: number = 0
  numero2: number = 0
  resultado: string ="-"

  sumar(){
    this.resultado = (this.numero1 + this.numero2).toString()
  }
  ngOnInit() {
  }

}
