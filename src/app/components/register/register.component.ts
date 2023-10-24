import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  register(registerForm: NgForm) {
    this.authService.register(registerForm.value);
    this.router.navigate(['/login']);
  }
}
