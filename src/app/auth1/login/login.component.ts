import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Make sure to import Router
import { MatSnackBar } from '@angular/material/snack-bar'; // Import if you use Material Snackbar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Add this if using standalone
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      console.log("Login info==>", this.loginForm.value);
      this.router.navigate(['./app/dashboard']);
    } else {
      this.snackBar.open('Invalid email or Password!', 'Close', { duration: 3000 });
    }
  }

  register() {
    if (this.registerForm.valid){
      console.log("Register info==>>",this.registerForm.value);
      setTimeout(()=>{
        window.location.reload();
      },2000);
      this.router.navigate(['./auth1/login']);
    }
    else{
      this.snackBar.open('Please fill in all fields correctly!','Close', {duration: 3000});
    }
  }
}
