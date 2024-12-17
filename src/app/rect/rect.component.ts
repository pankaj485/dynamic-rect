import { Component, input, output } from '@angular/core';
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
  reset = output<void>();

  onReset() {
    this.reset.emit();
  }
}
