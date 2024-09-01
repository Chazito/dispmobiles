import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Import IonicModule

import { CommonToolbarComponent } from "./common-toolbar/common-toolbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CommonToolbarComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [CommonToolbarComponent]
})

export class ComponentsModule { }
