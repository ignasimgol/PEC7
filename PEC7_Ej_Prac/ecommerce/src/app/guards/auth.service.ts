import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated: boolean = false;  

  constructor() {
    // Verificar si ya hay un token almacenado en el localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticated = true;  
    }
  }

  
  login(username: string, password: string): boolean {
    // Lógica de autenticación (para este ejemplo, simplemente ponemos "true")
    this.isAuthenticated = true;
    const token = 'fake-jwt-token';  
    

    localStorage.setItem('authToken', token);
    return this.isAuthenticated;
  }


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');
  }
}
