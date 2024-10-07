import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}


  signin() {
    if (this.username === 'admin' && this.password === 'password') {
      this.authService.login();
      this.router.navigate(['/home/homepage']);
    } else {
      alert('Invalid credentials');
    }
  }
}
