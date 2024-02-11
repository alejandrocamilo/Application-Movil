import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TablaPage implements OnInit {

  constructor() { }

  numero: number = 0
  tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  ngOnInit() {
  }

}
