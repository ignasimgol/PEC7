import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'; // Importa el servicio UserService
import { Router } from '@angular/router'; // Para redirigir después del login

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Llama al servicio de login
      this.userService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Guardar token de autenticación en UserStore
          this.userService.storeToken(response.token);
          // Redirigir al usuario después de iniciar sesión
          this.router.navigate(['/articles']);
        },
        error: (err) => {
          console.error('Error during login', err);
        }
      });
    } else {
      console.log('Form not valid');
    }
  }
}
