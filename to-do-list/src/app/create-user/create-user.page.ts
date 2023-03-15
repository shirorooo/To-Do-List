import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/users';
import { StorageService } from '../services/storage.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  name: string = ''
  age: number = 0
  email: string = ''
  password: string = ''
  confirmPassword: string = ''

  newUser: User = <User>{}

  constructor(
    private _storageService: StorageService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
  }

  createNewTrainer(){
    this.newUser.email = this.email
    this.newUser.age = this.age
    this.newUser.name = this.name
    this.newUser.password = this.password

    if(this.password === this.confirmPassword){
      this._storageService.addUser(this.newUser).then(user => {
        this.clearField()
        this._router.navigate(['/task'])
      })
    }
  }

  returnToLogin(){
    this._router.navigate(['/login'])
  }

  clearField(){
    this.name = ''
    this.age = 0
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
  }

}
