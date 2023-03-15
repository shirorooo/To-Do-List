import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../interface/users'

const USER_DB = 'user-database'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private _storage: Storage
  ) {
  }

  addUser(user: User): Promise<any>{
    return this._storage.get(USER_DB).then((users: User[]) => {
      if(users){
        users.push(user)
        return this._storage.set(USER_DB, users)
      } else {
        return this._storage.set(USER_DB, [user])
      }
    })
  }

  getUsers(): Promise<User[]>{
    return this._storage.get(USER_DB).then((users) => {
      if(users == null){
        users = []
      } else {
        return users
      }
    })
  }

  updateUser(user: User){
    return this._storage.get(USER_DB).then((users: User[]) => {
      if(!users || users.length === 0){
        return null
      }
      let tempUsers: User[] = []

      for(let tempUser of users){
        if(tempUser.password === user.password){
          tempUsers.push(user)
        } else {
          tempUsers.push(tempUser)
        }
      }

      return this._storage.set(USER_DB, tempUsers)
    })
  }

  deleteUser(email: String){
    return this._storage.get(USER_DB).then((users: User[]) => {
      if(!users || users.length === 0){
        return null
      }

      let usersToBeKept: User[] = []

      for(let userToKeep of users){
        if(userToKeep.email !== email){
          usersToBeKept.push(userToKeep)
        }
      }

      return this._storage.set(USER_DB, usersToBeKept)
    })
  }

}
