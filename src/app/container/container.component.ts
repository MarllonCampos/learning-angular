import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() title?: string;
  isComponentShowing: boolean = false;

  showComponent() {
    this.isComponentShowing = !this.isComponentShowing;
  }
}
