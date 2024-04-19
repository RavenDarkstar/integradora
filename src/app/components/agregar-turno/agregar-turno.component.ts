import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-turno',
  templateUrl: './agregar-turno.component.html',
  styleUrls: ['./agregar-turno.component.scss'],
})
export class AgregarTurnoComponent  implements OnInit {
  addAppointmentForm: FormGroup;

  constructor(private modalController:ModalController, public fb:FormBuilder, private alertController:AlertController, private firestore:AngularFirestore) {
    this.addAppointmentForm = this.fb.group({
      'deadline': new FormControl("", Validators.required),
      'time': new FormControl("", Validators.required),
      'priority': new FormControl("", Validators.required),
      'pending': new FormControl(true, Validators.required),
    })
  }

  async addAppointment() {
    const invalidAlert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de llenar todos los campos.',
      buttons: ['OK'],
    });

    try {
      if (this.addAppointmentForm.valid) {
        const { deadline, time, priority, pending } = this.addAppointmentForm.value;

        this.firestore.collection('appointments').doc().set({
          deadline: deadline,
          time: time,
          priority: priority,
          pending: JSON.parse(pending),
        });
        // Cerrar el modal luego de guardar los datos
        this.modalController.dismiss();
      } else {
        await invalidAlert.present();
      }
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
