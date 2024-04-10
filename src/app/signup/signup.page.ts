import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  constructor(private router: Router) { }

  signupUser() {
    // Lógica para registrar al usuario
    // Redirigir a la página principal después del registro exitoso
    this.router.navigate(['/home']);
  }
}
