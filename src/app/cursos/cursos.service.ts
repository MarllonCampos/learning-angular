import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos(): string[] {
    return [
      'Typescript',
      'React',
      'JavaScript',
      'Next',
      'Styled-Components',
      'Angular',
      'Python',
    ];
  }
}
