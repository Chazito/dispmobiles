import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

@Component({
  selector: 'app-nuevo-titulo',
  templateUrl: './nuevo-titulo.page.html',
  styleUrls: ['./nuevo-titulo.page.scss'],
})
export class NuevoTituloPage implements OnInit {
  titulo: Titulo = {}
  agregarTituloForm: FormGroup;

  constructor(private sqlService: ServicebdService, private fb: FormBuilder, private nav: NavController) {
    this.agregarTituloForm = this.fb.group({
      nombre: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      fechaEstreno: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      idTipoTitulo: [1, [Validators.required]],
      URLImagen: ['', [Validators.required]],
      URLTrailer: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  agregarTitulo() {
    this.sqlService.insertarTitulo(this.agregarTituloForm.value as Titulo).then(() => {
      this.nav.back()
    })
    this.agregarTituloForm.markAsUntouched()
  }

  async tomarImagen() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    const base64Image = `data:image/${image.format};base64,${image.base64String}`;
    this.agregarTituloForm.get('URLImagen')?.setValue(base64Image);
    this.agregarTituloForm.markAsTouched()
  }
}
