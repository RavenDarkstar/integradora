import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm:FormGroup;

  constructor(public fb:FormBuilder, private router:Router, private afAuth:AngularFireAuth, private alertController:AlertController) {
    // Campos del formulario de inicio de sesión
    this.loginForm = this.fb.group({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required)
    })
  }

  async loginUser() {
    // Alerta 1 -- El usuario dejó campos sin llenar
    const invalidAlert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill out all fields.',
      buttons: ['OK'],
    });

    // Alerta 2 -- El usuario no ingresó un email válido
    const emailAlert = await this.alertController.create({
      header: 'Error',
      message: 'Please input a valid email address.',
      buttons: ['OK'],
    });

    // Alerta 3 -- El usuario no ingresó un email válido
    const authAlert = await this.alertController.create({
      header: 'Error',
      message: 'One or more credentials are incorrect.',
      buttons: ['OK'],
    });

    try {
      // Validación
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        await this.afAuth.signInWithEmailAndPassword(email, password);

        // Redirigir al usuario al dashboard
        this.router.navigate(['/dashboard']);
      } else {

        /*----------------------- Manejo de errores -----------------------*/

        // Campos vacíos
        if (this.loginForm.get('email')?.hasError('required') || this.loginForm.get('password')?.hasError('required')) {
          await invalidAlert.present();
        }

        // Email no válido
        else if (this.loginForm.get('email')?.hasError('email')) {
          await emailAlert.present();
        }
      }
    } catch (error:any) {
      console.error(error);
      // Usuario o contraseña son incorrectos
      if (error.code === "auth/invalid-credential") {
        await authAlert.present();
      }
    }
  }
}
