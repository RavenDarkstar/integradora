import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup;

  constructor(public fb:FormBuilder, private router:Router, private firestore:AngularFirestore, private afAuth:AngularFireAuth, private alertController:AlertController) {
    // Campos del formulario de registro
    this.signupForm = this.fb.group({
      'username': new FormControl("", Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  async signupUser() {
    // Alerta 1 -- El usuario dejó campos sin llenar
    const invalidAlert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de llenar todos los campos.',
      buttons: ['OK'],
    });

    // Alerta 2 -- El usuario no ingresó un email válido
    const emailAlert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de ingresar un correo válido.',
      buttons: ['OK'],
    });

    // Alerta 3 -- La contraseña es muy corta
    const passwordLengthAlert = await this.alertController.create({
      header: 'Error',
      message: 'La contraseña debe tener mínimo 6 caracteres.',
      buttons: ['OK'],
    });

    try {
      // Validación
      if (this.signupForm.valid) {
        const { email, password, username } = this.signupForm.value;
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
        
        // Autenticación
        if (userCredential && userCredential.user) {
          // Guardar los datos del usuario en la BD
          await this.firestore.collection('users').doc(userCredential.user.uid).set({
            username: username,
            email: email
            // La contraseña no se guarda como texto en la colección por razones de seguridad
          });
          
          // Redirigir al usuario a la página de inicio de sesión
          this.router.navigate(['/login']);
        } else {
          console.error("Authentication failed.");
        }
      } else {

        /*----------------------- Manejo de errores -----------------------*/

        // Campos vacíos
        if (this.signupForm.get('username')?.hasError('required') || this.signupForm.get('email')?.hasError('required') || this.signupForm.get('password')?.hasError('required')) {
          await invalidAlert.present();
        }

        // Email no válido
        else if (this.signupForm.get('email')?.hasError('email')) {
          await emailAlert.present();
        }

        // Contraseña muy débil
        else if (this.signupForm.get('password')?.hasError('minlength')) {
          await passwordLengthAlert.present();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
}
