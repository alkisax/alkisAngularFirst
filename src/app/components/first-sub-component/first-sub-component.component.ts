import { Component, Input} from '@angular/core';
import {Todo} from '../../models/todo'

@Component({
  selector: 'app-first-sub-component',
  imports: [],
  templateUrl: './first-sub-component.component.html',
  styleUrl: './first-sub-component.component.css'
})
export class FirstSubComponentComponent {

  @Input() todos: Todo[] = [];

  title = "My Todo List";
  subtitle = "Things I need to do today";
  
  // Method to toggle task status
  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
  }
}
