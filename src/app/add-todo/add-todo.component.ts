import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  // inputText: string = "";
  @Input() inputText: string = "";
  @Input() submitNewTodo: Function;

  constructor() { }

  ngOnInit() {
  }

}
