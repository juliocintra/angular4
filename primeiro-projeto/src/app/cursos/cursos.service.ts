import { Injectable } from '@angular/core';

@Injectable({         // significa que poder ser injetado em um modulo
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'JavaScript', 'Angular'];
  }
}
