import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/users'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: User[] = []
  password: string = ''
  username: string = ''
  showErrorMessage = false

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchListOfUser()
  }

  loginTrainer(){
    this.users.forEach(user => {
      if(this.username == user.email){
        if(this.password == user.password){
          this.showErrorMessage = false
          this.username = ''
          this.password = ''
          this.router.navigate(['/task'])
        }
        else{
          this.showErrorMessage = true
        }
      } else{
        this.showErrorMessage = true
      }
    })
  }

  fetchListOfUser(){
    fetch('../../assets/input/admin-cred.json').then( response =>
      response.json()
    ).then(json => {
      this.users = json
    })
  }

  createNewAccount(){
    this.router.navigate(['/create-trainer'])
  }

}
