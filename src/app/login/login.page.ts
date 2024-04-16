import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm:FormGroup;

  constructor(public fb:FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  async loginUser() {}
}
