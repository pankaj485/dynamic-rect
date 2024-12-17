import { Component, Input, input, output } from '@angular/core';
import { ReactangleConfig } from './rect';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  rectConfig = input.required<ReactangleConfig>();
  rectConfigChange = output<ReactangleConfig>();

  onReset() {
    this.rectConfigChange.emit({
      height: 200,
      width: 200,
    });
  }
}
