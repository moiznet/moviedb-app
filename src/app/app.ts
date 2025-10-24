import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscarComponent } from './my-feature/buscar-component/buscar-component'; // Adjust the path as needed
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies-app');
}
