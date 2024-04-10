import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  async loginUser() {
    this.router.navigate(['/home']);

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      if (result) {
        // Inicio de sesión exitoso, redirigir a la página principal
      }
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        this.errorMessage = 'Invalid email or password.';
      } else {
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    }
  }

  LoginUser() {
    this.router.navigate(['/home']);
  }
}
