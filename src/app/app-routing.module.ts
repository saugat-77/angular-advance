import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from './forms/todo/todo.component';

const routes: Routes = [
  {path: '', },
  {path: 'todo', loadChildren: () => import('./forms/todo/todo.module').then(m => m.TodoModule)}

  // {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}