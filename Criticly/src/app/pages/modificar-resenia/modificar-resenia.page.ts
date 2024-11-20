import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificar-resenia',
  templateUrl: './modificar-resenia.page.html',
  styleUrls: ['./modificar-resenia.page.scss'],
})
export class ModificarReseniaPage implements OnInit {
  reseniaForm!: FormGroup;
  idResenia?: string;
  idUsuario?: string

  constructor(private fb: FormBuilder, private sqlService: ServicebdService, private route: ActivatedRoute, private auth: AuthService, private navController: NavController) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idResenia = params.get('id')!;
    });
    this.reseniaForm = this.fb.group({
      titulo: [null, [Validators.required]],
      resenia: [null, [Validators.required]],
      rating: [null, [Validators.required]],
      imagen: [null]
    });
    this.reseniaForm.patchValue(this.sqlService.selectResennaPorId(this.idResenia!))
    this.idUsuario = (await firstValueFrom(this.auth.usuarioObservable))?.idUsuario
  }

  publicarResenia() {
    if (this.reseniaForm.valid) {
      if (!this.idUsuario) return
      const datosForm: Resenna = {
        idResenna: this.idResenia,
        titulo: this.reseniaForm.get('titulo')?.value,
        comentario: this.reseniaForm.get('resenia')?.value,
        calificacion: this.reseniaForm.get('rating')?.value,
        fechaPublicacion: new Date(),
        esVisible: 1
      };
      this.sqlService.modificarResennaPorId(datosForm);
      this.navController.back();
    }
  }

}
