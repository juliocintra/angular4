import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  valorInicial: number = 15;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrimenta() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit() {
  }

}
