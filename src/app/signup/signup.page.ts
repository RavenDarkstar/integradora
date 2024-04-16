import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup;

  constructor(public fb:FormBuilder, private router:Router, private firestore:AngularFirestore) {
    this.signupForm = this.fb.group({
      'username': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  async signupUser() {
    // Lógica para registrar al usuario
    var formData = this.signupForm.value;

    // Guardar los datos en firebase
    this.firestore.collection('usuarios').add(formData)
      .then(() => {
        console.log('User data saved succesfully.');
        // Redirigir a la página principal después del registro exitoso
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error saving user data: ', error);
      })
  }
}
