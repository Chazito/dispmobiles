import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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
  URLImagen: string | undefined;
  idTitulo?: string;
  constructor(private fb: FormBuilder, private sqlService: ServicebdService, private route: ActivatedRoute, private auth: AuthService) { }

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

  enSubirFoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.reseniaForm.patchValue({
        imagen: file
      });
    }
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.URLImagen = image.dataUrl;
    this.reseniaForm.patchValue({
      image: image.dataUrl
    });
  }

  publicarResenia() {
    if (this.reseniaForm.valid) {
      const datosForm: Resenna = {
        idTitulo: this.idTitulo, idUsuario: this.auth.usuarioValue?.idUsuario,
        titulo: this.reseniaForm.get('titulo')?.value,
        comentario: this.reseniaForm.get('resenia')?.value,
        calificacion: this.reseniaForm.get('rating')?.value,
        URLImagen: "",
        fechaPublicacion: new Date(),
        esVisible: 1
      };
      this.sqlService.insertarResenna(datosForm)
    }
  }
}
