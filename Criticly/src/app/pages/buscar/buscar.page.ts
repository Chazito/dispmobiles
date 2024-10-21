import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filtros = ['Todo', 'Películas', 'Series', 'Documentales'];
  filtrosSelec: string[] = [];

  agregarFiltro(filtro: string) {
    if (filtro === 'Todo') {
      this.filtrosSelec = ['Todo'];
    } else {
      this.filtrosSelec = this.filtrosSelec.filter(f => f !== 'Todo');
      this.filtrosSelec.push(filtro);
    }
    this.verificarSeleccionTodo();
  }

  eliminarFiltro(filtro: string) {
    this.filtrosSelec = this.filtrosSelec.filter(f => f !== filtro);
    this.verificarSeleccionTodo();
  }

  verificarSeleccionTodo() {
    const otrosFiltros = this.filtros.filter(f => f !== 'Todo');
    if (this.filtrosSelec.length === 0 ||
      otrosFiltros.every(f => this.filtrosSelec.includes(f))) {
      this.filtrosSelec = ['Todo'];
    }
  }
}

