import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isLoggedIn();
    console.log('Is Authenticated:', isAuthenticated); // Debugging log
    
    if (!isAuthenticated) {
      this.router.navigate(['/auth/signin']);
      return false;
    }
    return true;
  }
}
