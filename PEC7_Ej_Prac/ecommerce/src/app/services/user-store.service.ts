import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private readonly tokenKey = 'auth-token';

  // Obtener el token almacenado
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Establecer el token en el almacenamiento local
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Eliminar el token
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
