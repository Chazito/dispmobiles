import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-escribir-resenia',
  templateUrl: './escribir-resenia.page.html',
  styleUrls: ['./escribir-resenia.page.scss'],
})
export class EscribirReseniaPage implements OnInit {
  reseniaForm!: FormGroup;
  URLImagen: string | undefined;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
      const datosForm = this.reseniaForm.value;
      console.log('Reseña enviada:', datosForm);
    }
  }
}
