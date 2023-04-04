import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-talk-board',
  templateUrl: './talk-board.page.html',
  styleUrls: ['./talk-board.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TalkBoardPage {

  constructor(
    private router: Router,
  ) { }

  brailleTutorial(){
    
  }
  text = 'Olá, eu sou o Pedro, e irei apresentar para você o sistema de leitura e escrita Braille. Este sistema foi criado para pessoas com deficiência visual como você e eu, para isso, iremos utilizar apenas as nossas mãos para ler e entender o que esta escrito em materias que possuem o sistema Braille.'
  buttonWord = 'Próximo'
  buttonNext(){
    this.text = 'Antes de começar-mos, peço que você segure o celular ou tablet com as suas duas mãos. A partir de agora, você sozinho com a ajuda de um responsável, irá aprender a usar o aplicativo, e em seguida, a minha amiga Ana Clara vai ensinar você a entender atraves do arraste de seus dedos na tela, o sistema Braille. Vamos começar?'
    this.buttonWord = 'Iniciar'
    this.router.navigateByUrl('braille-tutorial');
  }
}
