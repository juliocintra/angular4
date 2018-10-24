import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nome = 'Julio Cesar';
  urlImagem: 'http://lorenpixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string = '';
  mouseOver: boolean = false;

  getValor() {
    return 5
  }

  botao() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }
}
