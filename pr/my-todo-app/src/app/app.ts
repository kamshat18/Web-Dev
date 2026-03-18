import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  styleUrl: './app.css',
  template: `
    <h1>Todo Manager</h1>
    <router-outlet></router-outlet>`
})

export class App {
  // protected readonly title = signal('my-todo-app');
}
