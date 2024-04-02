import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; // Import using the `compat` sub-package for compatibility
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Import using the `compat` sub-package for compatibility
import { environment } from '../environments/environment'; // Import your Firebase configuration
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser-related functionalities
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize AngularFire with your Firebase configuration
    AngularFireAuthModule, // Import AngularFireAuthModule for Firebase Authentication functionalities
    IonicModule.forRoot() // Import IonicModule for Ionic functionalities
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
