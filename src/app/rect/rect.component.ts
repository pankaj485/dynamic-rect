import { Component, model } from '@angular/core';
import { ReactangleConfig } from './rect';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  rectConfig = model.required<ReactangleConfig>();

  onReset() {
    this.rectConfig.set({
      height: 100,
      width: 100,
    });
  }
}
