import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated: boolean = false;  // Estado de la autenticación

  constructor() {
    // Verificar si ya hay un token almacenado en el localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticated = true;  // Si hay un token, se considera autenticado
    }
  }

  // Método para autenticar el usuario (esto debería hacer una llamada HTTP en una aplicación real)
  login(username: string, password: string): boolean {
    // Lógica de autenticación (para este ejemplo, simplemente ponemos "true")
    this.isAuthenticated = true;
    const token = 'fake-jwt-token';  // Token falso (en una aplicación real lo obtienes del backend)
    
    // Almacenar el token en el localStorage
    localStorage.setItem('authToken', token);
    return this.isAuthenticated;
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');  // Eliminar el token al cerrar sesión
  }
}
