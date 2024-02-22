import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'video_Aplication';

  palavra: String = ' ';
  clicado: boolean = false;
  cor: String = '#000000';
  corPalavra: String = '#FFFFFF';

  teste() {
    console.log('opppppaa');
    if (this.clicado) {
      this.cor = '#ff0000';
      this.corPalavra = '#000000';
      this.palavra = this.corPalavra;
    } else {
      this.cor = '#000000';
      this.corPalavra = '#36FF93';
      this.palavra = this.corPalavra;
    }
    this.clicado = !this.clicado;
  }
}
