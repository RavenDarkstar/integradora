import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  logout() {
    // Lógica para cerrar sesión
    console.log("Cerrar sesión"); // Aquí puedes agregar tu lógica real de cierre de sesión
  }

  toggleFullScreen() {
    // Verifica si la plataforma admite la funcionalidad de pantalla completa
    if (this.platform.is('capacitor') || this.platform.is('cordova')) {
      if (this.platform.is('android') || this.platform.is('ios')) {
        // En Capacitor o Cordova, se puede solicitar pantalla completa
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }
    } else {
      // Para navegadores, se utiliza el método estándar de JavaScript
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  }
}
