import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './shared/components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('edikrisnayana-profile-web');
}
