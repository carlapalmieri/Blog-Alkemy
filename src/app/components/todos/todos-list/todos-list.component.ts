import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = []
  filterTodos: FormGroup;
  filterActive:boolean = false;

  constructor(private todosService: TodosService, private builder: FormBuilder, private router: Router ) { 
    this.filterTodos = this.builder.group({
      idUser: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getTodos()
  }

  
  getTodos() {
    this.todosService.getTodosService().subscribe(
    res => {
    this.todos = res
    },
    err => console.log(err))
  }

  getTodosByUser(id: number) {
    console.log(id)
    if(id !== 0 && id !== null) {
      this.todosService.getTodosByUserService(id).subscribe(
      res => {
      this.todos = res
      },
      err => console.log(err)
    )} else {
      this.getTodos()
    }
    
  }
}
