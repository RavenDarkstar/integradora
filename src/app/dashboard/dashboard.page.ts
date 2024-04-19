import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable, map } from 'rxjs';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {
  selectedItem: string = '';
  pendingCount$: Observable<number>;
  nonPendingCount$: Observable<number>;
  appointments$: Observable<any[]>;
  users$: Observable<any[]>
  
  @ViewChild('chartDiv', { static: false }) chartDiv: ElementRef | undefined;

  constructor(private platform: Platform, private afAuth:AngularFireAuth, private router:Router, private firestore:AngularFirestore) {
    // Seleccionar turnos
    this.appointments$ = this.firestore.collection('appointments').valueChanges();

    // Seleccionar usuarios
    this.users$ = this.firestore.collection('users').valueChanges();

    // Contar el número de turnos por atender
    this.pendingCount$ = this.firestore.collection('appointments', ref =>
      ref.where('pending', '==', true)).valueChanges().pipe(map(appointments => appointments.length));
    
    // Contar el número de turnos finalizados
    this.nonPendingCount$ = this.firestore.collection('appointments', ref =>
      ref.where('pending', '==', false)).valueChanges().pipe(map(appointments => appointments.length));
  }

  ngOnInit(){}

  ngAfterViewInit() {
    if (this.chartDiv) {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(() => this.drawChart());
    }
  }

  logout() {
    // Lógica para cerrar sesión
    this.afAuth.signOut().then(() => {
      console.log("User signed out");
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  }

  showContent(item: string) {
    this.selectedItem = item;
  }

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      pieHole: 0.4,
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
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
