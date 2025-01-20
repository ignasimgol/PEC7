import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'; // Importa el servicio UserService
import { Router } from '@angular/router'; // Para redirigir después del registro

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Llama al servicio de registro
      this.userService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Register successful', response);
          // Redirigir a la página de login después del registro
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error during registration', err);
        }
      });
    } else {
      console.log('Form not valid');
    }
  }
}

