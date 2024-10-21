import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEditarResennaPageRoutingModule } from './admin-editar-resenna-routing.module';

import { AdminEditarResennaPage } from './admin-editar-resenna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEditarResennaPageRoutingModule
  ],
  declarations: [AdminEditarResennaPage]
})
export class AdminEditarResennaPageModule {}
