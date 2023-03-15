import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service'
import { User } from '../interface/users'
import { Platform } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'
import { UpdateTrainerPage } from '../update-trainer/update-trainer.page'

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  users: User[] = []
  newUser: User = <User>{}

  constructor(
    private _storageService: StorageService,
    private _platform: Platform,
    private _router: Router,
    private _storage: Storage
  ) {
  }

  ngOnInit() {
    this.fetchListOfUser()
  }

  ionViewWillEnter(){
    this.fetchListOfUser()
  }

  fetchListOfUser(){
    this._storageService.getUsers().then(users => {
      this.users = users
    })
  }

  addNewTrainer(){
    this._router.navigate(['/create-trainer'])
  }

  deleteTrainer(email: String){
    this._storageService.deleteUser(email).then((users => {
      this.ionViewWillEnter()
    }))
  }

  updateTrainer(
    name: string,
    age: number,
    email: string,
    password: string
  ){
    let user: User = <User>{}

    user.email = email
    user.name = name
    user.age = age
    user.password = password

    let navExtras: NavigationExtras = {
      state: {
        User: user
      }
    }

    this._router.navigate(['/update-trainer'], navExtras)
  }

  returnLoginPage(){
    this._router.navigate(['/login'])
  }
}
