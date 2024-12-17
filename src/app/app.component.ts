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
  rectSize = signal<ReactangleConfig>({
    height: 100,
    width: 100,
  });
}
