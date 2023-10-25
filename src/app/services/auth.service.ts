import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  isValidUser(user: User): boolean {
    let users: User[] = this.storageService.getAllUsers();

    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        this.storageService.setLoggedInUser(u);
        isUser = true;
        break;
      }
    }
    return isUser;
  }

  register(registerForm: User) {
    let users: User[] = this.storageService.getAllUsers();

    let registerUser = {
      id: users.length + 1,
      email: registerForm.email,
      password: registerForm.password,
    };

    users.push(registerUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  isLoggedIn(): boolean {
    return this.storageService.isLoggedInUser();
  }

  logout(): void {
    this.storageService.removeLoggedInUser();
  }

  getLoggedInUser(user: User[]) {
    return this.storageService.getLoggedInUser();
  }
}
