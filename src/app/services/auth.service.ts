import { Injectable } from '@angular/core';
import { switchAll } from 'rxjs/operators';
import { User } from '../interfaces/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = []

  constructor( private router: Router) { }

  getUsers() {
    if(localStorage.getItem('users') === null) {
      this.users = []
      return this.users
    } else {
      this.users = JSON.parse(localStorage.getItem('users')!)
      return this.users
    }
  }

  addUser(user: User) {
    if(localStorage.getItem('users') === null) {
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate(['/ingresar']);
    } else {
      if(!this.userExists(user)) {
        this.users = JSON.parse(localStorage.getItem('users')!)
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigate(['/ingresar']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
      }

    }
  }

  userExists(userEvaluated: User):boolean {
    let exists = false
    for(const user of this.users) {
      if(user.email === userEvaluated.email) {
        exists = true
        return exists
      }
      else {
      }
    }
    return exists
  }

  deleteUser(user: User) {
    this.getUsers();
    for(let i = 0; i <this.users.length; i++) {
      if(user === this.users[i]) {
        this.users.splice(i, 1),
        localStorage.setItem('users',  JSON.stringify(this.users))
      }
    }
  }

  logUser(userEvaluated: {email: string, username: string}) {
    this.getUsers();
    console.log(userEvaluated)
    for(let user of this.users) {
      console.log('we got')
      if(user.email === userEvaluated.email && user.username === userEvaluated.username) {
        localStorage.setItem('userLogged',  JSON.stringify(user))
        this.router.navigate(['/posteos'])
        Swal.fire({
          icon: 'success',
          title: 'Iniciaste sesión',
          showConfirmButton: false,
          timer: 800
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Email o nombre de usuario incorrectos',
          showConfirmButton: false,
          timer: 800
        })
      }
    } 
    if(this.users.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'No hay usuarios registrados',
        showConfirmButton: false,
        timer: 800
      })
    }
  }

  getuserLoggedService() {
    return JSON.parse(localStorage.getItem('userLogged')!)
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('userLogged');
  }

  logout() {
    Swal.fire({
      title: 'Estás seguro de que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Cerraste sesión',
          showConfirmButton: false,
          timer: 800
        })
      localStorage.removeItem('userLogged');
      this.router.navigate(['/ingresar']);
      }
    })
  }
}
