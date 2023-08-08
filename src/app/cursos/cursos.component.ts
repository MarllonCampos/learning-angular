import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  portalName: string;

  cursos: string[];
  constructor(private cursosService: CursosService) {
    this.portalName = 'https://google.com.br';

    this.cursos = cursosService.getCursos();
  }
}
