import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { AgregarClienteComponent } from '../components/agregar-cliente/agregar-cliente.component';
import { AgregarTurnoComponent } from '../components/agregar-turno/agregar-turno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    AgregarClienteComponent,
    AgregarTurnoComponent
  ]
})
export class DashboardPageModule {}
