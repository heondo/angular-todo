import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../todo-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[];

  constructor() {
    this.todoList = [
      {
        id: 1,
        text: 'First todo',
        completed: false
      },
      {
        id: 2,
        text: 'Second todo',
        completed: false
      }
    ];
    this.submitNewTodo = this.submitNewTodo.bind(this);
   }

   submitNewTodo(text: string): void {
      console.log(this.todoList)
    const newTodo: TodoItem = {
      id: this.todoList.length ? this.todoList[this.todoList.length-1].id + 1 : 1,
      text,
      completed: false
    }
    this.todoList.push(newTodo);
   }

  ngOnInit() {
  }

}
