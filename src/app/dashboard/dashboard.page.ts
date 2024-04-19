import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Observable, map } from 'rxjs';
import { AgregarClienteComponent } from '../components/agregar-cliente/agregar-cliente.component';
import { AgregarTurnoComponent } from '../components/agregar-turno/agregar-turno.component';
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

  // Variables para mostrar y borrar turnos
  appointmentsCollection: AngularFirestoreCollection<any>;
  appointments$: Observable<any[]>;
  appointments: any[] = [];

  // Variables para mostrar y borrar clientes
  clientsCollection: AngularFirestoreCollection<any>;
  clients$: Observable<any[]>;
  clients: any[] = [];

  users$: Observable<any[]>;
  
  @ViewChild('chartDiv', { static: false }) chartDiv: ElementRef | undefined;

  constructor(private platform: Platform, private afAuth:AngularFireAuth, private router:Router, private firestore:AngularFirestore, private modalController:ModalController) {
    // Seleccionar turnos
    this.appointmentsCollection = this.firestore.collection('appointments');
    this.appointments$ = this.appointmentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => ({ id: a.payload.doc.id, ...a.payload.doc.data() })))
    );
    this.appointments$.subscribe(appointments => this.appointments = appointments);

    // Seleccionar usuarios
    this.users$ = this.firestore.collection('users').valueChanges();

    // Seleccionar clientes
    this.clientsCollection = this.firestore.collection('clients');
    this.clients$ = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => ({ id: a.payload.doc.id, ...a.payload.doc.data() })))
    );
    this.clients$.subscribe(clients => this.clients = clients);

    // Contar el número de turnos por atender
    this.pendingCount$ = this.firestore.collection('appointments', ref =>
      ref.where('pending', '==', true)).valueChanges().pipe(map(appointments => appointments.length));
    
    // Contar el número de turnos finalizados
    this.nonPendingCount$ = this.firestore.collection('appointments', ref =>
      ref.where('pending', '==', false)).valueChanges().pipe(map(appointments => appointments.length));
  }

  // Borrar cliente
  deleteClient(documentId: string) {
    try {
      this.firestore.collection('clients').doc(documentId).delete();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  }

  // Borrar turno
  deleteAppointment(documentId: string) {
    try {
      this.firestore.collection('appointments').doc(documentId).delete();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
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

  async abrirModalClientes() {
    const modal = await this.modalController.create({
      component: AgregarClienteComponent,
      componentProps: {
        // Pasar datos al modal
      }
    });

    await modal.present();
  }

  async abrirModalTurnos() {
    const modal = await this.modalController.create({
      component: AgregarTurnoComponent,
      componentProps: {
        // Pasar datos al modal
      }
    });

    await modal.present();
  }

  showContent(item: string) {
    this.selectedItem = item;
    var chartContainer = document.getElementById('chartContainer');
    if (this.chartDiv) {
      if (item === 'reports') {
        this.chartDiv.nativeElement.classList.remove('chart-hidden');
        chartContainer?.classList.remove('card-hidden');
        this.drawChart();
      } else {
        this.chartDiv.nativeElement.classList.add('chart-hidden');
        chartContainer?.classList.add('card-hidden');
      }
    }
  }

  drawChart() {
    // Fetch data from Firestore and process it
    const data = [['Task', 'Turnos atendidos']];
    this.appointments.forEach(appointment => {
      data.push([appointment.deadline, parseInt(appointment.time)]);
    });

    const dataTable = google.visualization.arrayToDataTable(data);

    const options = {
      title: '',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    const chart = new google.visualization.LineChart(document.getElementById('chartDiv'));
    chart.draw(dataTable, options);
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
