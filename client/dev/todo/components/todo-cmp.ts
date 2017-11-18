import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import {
  TodoService
} from "../services/todo-service";

import { TranslateService } from '@ngx-translate/core';

type Todo = {
  todoMessage: string;
  _id?: string;
};

@Component({
  selector: "todo-cmp",
  templateUrl: "todo/templates/todo.html",
  styleUrls: ["todo/styles/todo.css"]
})
export class TodoCmp implements OnInit {
  title: string = "hello!";
  todos: Todo[] = [];
  todoForm: Todo;

  constructor(private _todoService: TodoService, private translate: TranslateService) {
    this.todoForm = {
      "todoMessage": ""
    };

    translate.addLangs(["en", "tr"]);
    translate.setDefaultLang('tr');
    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }

  ngOnInit() {

  }

  private _getAll(): void {
    this._todoService
      .getAll()
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  add(message: string): void {
    this._todoService
      .add(message)
      .subscribe((m) => {
        this.todos.push(m);
        this.todoForm.todoMessage = "";
      });
  }

  remove(id: string): void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      });
  }
}
