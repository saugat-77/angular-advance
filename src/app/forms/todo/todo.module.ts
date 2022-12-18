import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from './store/todo.reducer';

const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  declarations: [TodoComponent],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoFeatureKey, todoReducer)
  ]
})
export class TodoModule {}