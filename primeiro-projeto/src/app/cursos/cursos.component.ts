import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: any;

  cursos: string[] = ['Java', 'JavaScript', 'Angular'];

  constructor() {
    this.nomePortal = 'www.goole.com.br';
  }

  ngOnInit() {
  }

}
