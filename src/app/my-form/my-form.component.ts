import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent {
  name: string = 'abc';
  pessoa = {
    name: '',
    idade: '',
  };
}
