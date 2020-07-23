import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaEmpleosPageRoutingModule } from './lista-empleos-routing.module';
import { ListaEmpleosPage } from './lista-empleos.page';
import { CallsComponent } from '../components/calls/calls.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEmpleosPageRoutingModule
  ],
  declarations: [ListaEmpleosPage, CallsComponent],
  exports: [CallsComponent]
})
export class ListaEmpleosPageModule {}
