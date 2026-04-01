import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo';
import { Todo } from '../../models/todo.model';

import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent implements OnInit {
  todos:Todo[]=[];
  filteredTodos:Todo[]=[];
  totalCount=0;
  constructor(private todoService: TodoService,
              private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data =>
    {
      this.todos = data.slice(0, 30);
      this.totalCount =this.todos.length;
      this.applyFilter();
    });

this.route.queryParams.subscribe(params => {
  this.applyFilter();
  });
  }
  applyFilter(): void {
    const status = this.route.snapshot.queryParamMap.get('status');
    if (!status){
      this.filteredTodos = this.todos;
    }
    else if(status==='active'){
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    }
    else if(status==='pending'){
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    }
  }

  }
