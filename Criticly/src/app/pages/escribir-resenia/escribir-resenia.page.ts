import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
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
  constructor(private fb: FormBuilder, private sqlService: ServicebdService, private route: ActivatedRoute, private auth: AuthService, private navController: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idTitulo = params.get('id')!;
    });
    this.reseniaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      resenia: ['', [Validators.required]],
      rating: [3, [Validators.required]],
      imagen: [null]
    });
  }

  publicarResenia() {
    if (this.reseniaForm.valid) {
      const datosForm: Resenna = {
        idTitulo: this.idTitulo,
        idUsuario: this.auth.usuarioValue?.idUsuario,
        titulo: this.reseniaForm.get('titulo')?.value,
        comentario: this.reseniaForm.get('resenia')?.value,
        calificacion: this.reseniaForm.get('rating')?.value,
        URLImagen: "",
        fechaPublicacion: new Date(),
        esVisible: 1
      };
      this.sqlService.insertarResenna(datosForm);
      this.navController.back();
    }
  }
}
