import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

@Component({
  selector: 'app-editar-titulo',
  templateUrl: './editar-titulo.page.html',
  styleUrls: ['./editar-titulo.page.scss'],
})
export class EditarTituloPage implements OnInit {
  titulo: Titulo = {}
  editarTituloForm: FormGroup = this.fb.group({});
  constructor(private route: ActivatedRoute, private sqlService: ServicebdService, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      this.editarTituloForm = this.fb.group({
        nombre: [this.titulo.nombre, [Validators.required]],
        sinopsis: [this.titulo.sinopsis, [Validators.required]],
        fechaEstreno: [this.sqlService.formatFechaSQLite(String(this.titulo.fechaEstreno!)), [Validators.required]],
        duracion: [this.titulo.duracion, [Validators.required]],
        tipoTitulo: [this.titulo.idTipoTitulo, [Validators.required]],
        URLImagen: [this.titulo.URLImagen, [Validators.required]],
        URLTrailer: [this.titulo.URLTrailer, [Validators.required]]
      });
      const id = params.get('id');
      this.titulo = await this.sqlService.selectTituloPorId(id!) as Titulo;
      this.editarTituloForm.patchValue(this.titulo)
    });

  }

  modificarTitulo() {
    this.sqlService.modificarTituloPorId({ ...this.titulo, ...this.editarTituloForm.value })
    this.editarTituloForm.markAsUntouched()
  }

  async tomarImagen() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });

    const base64Image = `data:image/${image.format};base64,${image.base64String}`;
    this.editarTituloForm.get('URLImagen')?.setValue(base64Image);
    this.editarTituloForm.markAsTouched()
  }

}
