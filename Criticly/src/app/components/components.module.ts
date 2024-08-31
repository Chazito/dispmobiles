import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Import IonicModule

import { CommonToolbarComponent } from "./common-toolbar/common-toolbar.component";

@NgModule({
    declarations: [CommonToolbarComponent],
    imports: [CommonModule, IonicModule],
    exports: [CommonToolbarComponent]
})

export class ComponentsModule{}