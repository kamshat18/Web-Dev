import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list';
export const routes: Routes = [
  {path: 'todos', component: TodoListComponent},
  {path:'',redirectTo: 'todos', pathMatch: 'full'},
];
