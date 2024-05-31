import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class TodosComponent {
  title = "Title";
  todos: Array<{done: boolean; text: string}> = [];

  add(text: string) {
    this.todos.push({text, done: false});
  }

  toggle(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }
}
