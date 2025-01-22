import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;  // Si el usuario está autenticado, puede acceder a la ruta
    } else {
      this.router.navigate(['/user/login']);  // Si no está autenticado, redirige al login
      return false;
    }
  }
}
