import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectTituloPorId(id).then((titulo: Titulo | null) => {
          if (titulo) this.titulo = titulo;
        });
      }
      this.editarTituloForm = this.fb.group({
        titulo: [this.titulo.nombre, [Validators.required]],
        sinopsis: [this.titulo.sinopsis, [Validators.required]],
        fechaEstreno: [this.sqlService.formatFechaSQLite(String(this.titulo.fechaEstreno!)), [Validators.required]],
        duracion: [this.titulo.duracion, [Validators.required]],
        urlImagen: [this.titulo.URLImagen, [Validators.required]],
        urlTrailer: [this.titulo.URLTrailer, [Validators.required]]
      });
    });

  }

  modificarTitulo() {
    this.sqlService.modificarTituloPorId(this.titulo)
  }
}
