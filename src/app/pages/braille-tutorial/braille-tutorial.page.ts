import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-braille-tutorial',
  templateUrl: './braille-tutorial.page.html',
  styleUrls: ['./braille-tutorial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BrailleTutorialPage implements OnInit {

  constructor() { }
  btnBottomLeft = 'Voltar ou sair';
  btnBottomMiddle = 'Repetir leitura';
  btnBottomRight = 'Próximo';
  btnTopLeft = 'Menu aprendizagem';
  btnTopMiddle = 'Tabela alfanumérica';
  btnTopRight= 'Tentar novamente';
  
  ngOnInit() {
    
  }

}
