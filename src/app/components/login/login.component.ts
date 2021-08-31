import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup 
  
  constructor( private router: Router, private builder: FormBuilder, private authService: AuthService) { 
    this.userForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
    })
   }

  ngOnInit(): void {
  }

  signIn(formValues: {email: string; username:string}) {
    this.authService.logUser({
      email: formValues.email,
      username: formValues.username
    })
  }
}
