import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss'],
})
export class AgregarClienteComponent  implements OnInit {
  addClientForm: FormGroup;

  constructor(private modalController:ModalController, public fb:FormBuilder, private alertController:AlertController, private firestore:AngularFirestore) {
    this.addClientForm = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'direccion': new FormControl("", Validators.required),
      'telefono': new FormControl("", Validators.required),
    })
  }

  async addClient() {
    const invalidAlert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de llenar todos los campos.',
      buttons: ['OK'],
    });

    try {
      if (this.addClientForm.valid) {
        const { nombre, apellido, direccion, telefono } = this.addClientForm.value;

        this.firestore.collection('clients').doc().set({
          nombre: nombre,
          apellido: apellido,
          direccion: direccion,
          telefono: telefono,
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
