import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private sqlService: ServicebdService) { }

  ngOnInit() {
    this.textoBusqueda$.pipe(
      debounceTime(1000),
      switchMap(() => this.buscarTitulos())
    ).subscribe();
  }

  filtros = ['Todo', 'Películas', 'Series'];
  filtroSeleccionado: string = 'Todo';
  titulos?: Titulo[];
  textoBusqueda: string = '';
  cargando: boolean = false;

  private textoBusqueda$ = new Subject<void>();

  seleccionarFiltro(filtro: string) {
    this.filtroSeleccionado = filtro;
    if (!this.textoBusqueda) return
    this.textoBusqueda$.next();
  }

  buscarTitulos() {
    let tipoTitulo: string | null = null;

    switch (this.filtroSeleccionado) {
      case 'Películas':
        tipoTitulo = '1';
        break;
      case 'Series':
        tipoTitulo = '2';
        break;
      case 'Todo':
      default:
        tipoTitulo = null;
        break;
    }

    return this.sqlService.selectTitulosConBusqueda(tipoTitulo, this.textoBusqueda).then((resultados) => {
      this.titulos = resultados;
      this.cargando = false
    }).catch((error: any) => {
      console.error('Error al buscar títulos:', error);
      this.cargando = false
    });
  }

  actualizarBusqueda(event: any) {
    this.cargando = true
    this.textoBusqueda = event.detail.value;
    if (!this.textoBusqueda) {
      this.titulos = undefined;
      this.cargando = false
      return
    }
    this.textoBusqueda$.next();
  }

  ionViewWillEnter() {
    this.actualizarBusqueda({
      detail: {
        value: this.textoBusqueda
      }
    })
  }
}
