import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSubComponentComponent } from './components/first-sub-component/first-sub-component.component'
import { Todo } from './models/todo'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstSubComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Alkis'

  person = {
    name: "alkis",
    age: 44,
    email: "alkisax@gmail.com"
  }

  todoList: Todo[] = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Walk the dog', completed: true },
    { id: 3, task: 'Finish Angular project', completed: false }
  ];
  todoList2: Todo[] = [
    { id: 1, task: 'Buy food', completed: false },
    { id: 2, task: 'Walk the cat', completed: true },
    { id: 3, task: 'Finish react project', completed: false }
  ];
  todoList3: Todo[] = [
    { id: 1, task: 'Buy beers', completed: false },
    { id: 2, task: 'Walk the elephant', completed: true },
    { id: 3, task: 'Finish java project', completed: false }
  ];
}
