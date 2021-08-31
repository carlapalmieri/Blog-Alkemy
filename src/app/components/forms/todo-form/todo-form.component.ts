import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
  }

  constructor( private router: Router, private builder: FormBuilder, private localDataService: LocalDataService, private authService: AuthService) {
    this.todoForm = this.builder.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    })
  }

  ngOnInit(): void {
    this.getLoggedUser()
  }

  saveTodo(formValues: {title: string}) {
    this.localDataService.addTodo({
      userId: this.user.id,
      title: formValues.title,
      id:  this.localDataService.getTodos().length + 1,
      completed: false
    })
  }

  getLoggedUser() {
    this.user = this.authService.getuserLoggedService()
  }

}
