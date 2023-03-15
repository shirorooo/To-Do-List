import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/users';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.page.html',
  styleUrls: ['./update-trainer.page.scss'],
})
export class UpdateTrainerPage implements OnInit {

  user: User = <User>{}

  name: string = ''
  age: number = 0
  email: string = ''
  password: string = ''

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _storageService: StorageService
  ) {
    this._route.queryParams.subscribe((params) => {
      if(_router.getCurrentNavigation()?.extras.state !== null){
        const state = this._router.getCurrentNavigation()?.extras.state as {
          User: User
        }

        this.name = state.User.name
        this.age = state.User.age
        this.email = state.User.email
        this.password = state.User.password
      }
    })
  }

  ngOnInit() {
  }

  updateTrainer(){
    let user: User = <User>{}

    user.name = this.name
    user.age = this.age
    user.email = this.email
    user.password = this.password

    this._storageService.updateUser(user).then(() => {
      this._router.navigate(['/task'])
    })
  }

}
