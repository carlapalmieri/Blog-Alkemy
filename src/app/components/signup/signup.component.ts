import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup

  constructor( private router: Router, private builder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      website: ['', [Validators.required, Validators.minLength(8)]],
      companyName: ['', [Validators.required, Validators.minLength(4)]],
      companyCatchPhrase: ['', [Validators.required, Validators.minLength(10)]],
      companyBs: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  signUp(formValues: {email: string, username: string, name: string, website: string, companyName: string, companyCatchPhrase: string, companyBs: string}) {
    console.log(formValues);
    this.authService.addUser({
      id: this.authService.getUsers().length + 1,
      email: formValues.email,
      name: formValues.name,
      username: formValues.username,
      website: formValues.website,
      company: {
        name: formValues.companyName,
        catchPhrase: formValues.companyCatchPhrase,
        bs: formValues.companyBs
      },
      phone: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      }
    })
  }
}
