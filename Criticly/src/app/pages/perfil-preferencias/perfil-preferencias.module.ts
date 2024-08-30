import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPreferenciasPageRoutingModule } from './perfil-preferencias-routing.module';

import { PerfilPreferenciasPage } from './perfil-preferencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPreferenciasPageRoutingModule
  ],
  declarations: [PerfilPreferenciasPage]
})
export class PerfilPreferenciasPageModule {}
