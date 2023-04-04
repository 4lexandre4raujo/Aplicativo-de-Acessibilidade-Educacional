import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-braille-learning-menu',
  templateUrl: './braille-learning-menu.page.html',
  styleUrls: ['./braille-learning-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BrailleLearningMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
