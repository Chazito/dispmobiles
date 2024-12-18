import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-escribir-resenia',
  templateUrl: './escribir-resenia.page.html',
  styleUrls: ['./escribir-resenia.page.scss'],
})
export class EscribirReseniaPage implements OnInit {
  reseniaForm!: FormGroup;
  idTitulo?: string;
  idUsuario?: string

  constructor(private fb: FormBuilder, private sqlService: ServicebdService, private route: ActivatedRoute, private auth: AuthService, private navController: NavController) { }

  async ngOnInit() {
    this.reseniaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      comentario: ['', [Validators.required]],
      rating: [3, [Validators.required]],
    });
    this.route.paramMap.subscribe(params => {
      this.idTitulo = params.get('id')!;
    });
    this.idUsuario = (await firstValueFrom(this.auth.usuarioObservable))?.idUsuario
  }

  publicarResenia() {
    if (this.reseniaForm.valid) {
      if (!this.idUsuario) return
      const datosForm: Resenna = {
        idTitulo: this.idTitulo,
        idUsuario: this.idUsuario,
        titulo: this.reseniaForm.get('titulo')?.value,
        comentario: this.reseniaForm.get('comentario')?.value,
        calificacion: this.reseniaForm.get('rating')?.value,
        fechaPublicacion: new Date(),
        esVisible: 1
      };
      this.sqlService.insertarResenna(datosForm);
      this.navController.back();
    }
  }
}
