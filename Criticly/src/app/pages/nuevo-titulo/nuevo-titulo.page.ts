import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private sqlService: ServicebdService, private fb: FormBuilder) {
    this.agregarTituloForm = this.fb.group({
      titulo: ['', [Validators.required]],
      sinopsis: ['', [Validators.required]],
      fechaEstreno: ['', [Validators.required]],
      duracion: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      urlImagen: ['', [Validators.required]],
      urlTrailer: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  agregarTitulo() {
    this.sqlService.insertarTitulo(this.titulo)
  }

}
