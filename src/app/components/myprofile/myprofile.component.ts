import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getLoggedUser()
  }

  getLoggedUser() {
    this.user = this.authService.getuserLoggedService()
  }

}
