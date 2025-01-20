import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserStoreService } from './user-store.service'; // Importar UserStoreService

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://your-api-url'; // Asegúrate de tener la URL correcta

  constructor(private http: HttpClient, private userStore: UserStoreService) {}

  // Simulación de un registro
  register(userData: { username: string, password: string }): Observable<any> {
    // Simulamos una respuesta del backend
    return of({ token: 'fake-jwt-token' }).pipe(
      catchError(err => {
        console.error('Registration error', err);
        return of(null);
      })
    );
  }

  // Simulación de un login
  login(userData: { username: string, password: string }): Observable<any> {
    // Simulamos una respuesta del backend
    return of({ token: 'fake-jwt-token' }).pipe(
      catchError(err => {
        console.error('Login error', err);
        return of(null);
      })
    );
  }

  // Almacenar token en UserStore
  storeToken(token: string): void {
    this.userStore.setToken(token);
  }
}
