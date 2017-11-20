import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarUsuariosPage } from './buscar-usuarios';

@NgModule({
  declarations: [
    BuscarUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarUsuariosPage),
  ],
})
export class BuscarUsuariosPageModule {}
