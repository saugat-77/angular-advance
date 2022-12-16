import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {deleteTodo, saveOrUpdateTodo} from './store/todo.action';
import {filter, takeUntil} from 'rxjs/operators';
import {select} from '@ngrx/store';
import { selectTodos } from './store/todo.selector';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit,OnDestroy {

  private unsubscribe = new Subject<void>();

  todos: Todo[] = [];
  todoDescriptionFormControl = new FormControl('', [Validators.required]);
  todoIdFormControl = new FormControl(null, [Validators.required]);

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {

    this.store.pipe(
      select(selectTodos),
      filter(state => state.length > 0),
      takeUntil(this.unsubscribe)
    ).subscribe(todos => {
      this.todos = todos;
    });
    
    // this.todos = [
    //   {id: 1, description: 'Buy milk', done: true},
    //   {id: 2, description: 'Learn RxJS', done: false},
    //   {id: 3, description: 'Learn Angular', done: true},
    //   {id: 4, description: 'Learn NgRx', done: false},
    //   {id: 5, description: 'Learn Angular animation', done: true},
    // ];
  }

  undoOrCompleteTodo(item: Todo): void {
    const todo: Todo = {...item, done: !item.done};
    this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: true}));
  }

  deleteTodo(todoId: number): void {
    this.store.dispatch(deleteTodo({todoId}));
  }

  addTodo(): void {
    if (this.todoIdFormControl.value && this.todoIdFormControl.value >= 0 && !this.todos.find(t => t.id === this.todoIdFormControl.value)) {
      const todo: Todo = {
        id: this.todoIdFormControl.value,
        description: this.todoDescriptionFormControl.value ?? '',
        done: false
      }
      this.todos.push(todo);
      this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: false}));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
}