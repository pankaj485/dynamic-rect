import { Component, signal } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';
import { ReactangleConfig } from './rect/rect';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectComponent, FormsModule],
})
export class AppComponent {
  defaultHeight: number = 100;
  defaultWidth: number = 100;

  rectSize = signal<ReactangleConfig>({
    height: this.defaultHeight,
    width: this.defaultWidth,
  });

  onRectangeReset() {
    this.rectSize.set({
      height: this.defaultHeight,
      width: this.defaultWidth,
    });
  }
}
