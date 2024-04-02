import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async loginUser(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (result) {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
      }
    } catch (error: any) {
      console.log(error?.message ?? 'Error desconocido');
    }       
  }
}
