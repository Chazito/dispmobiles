import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Marcador } from 'src/app/services/marcador';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { marcadores } from 'src/assets/datos';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.page.html',
  styleUrls: ['./guardados.page.scss'],
})
export class GuardadosPage implements OnInit {
  guardados: Marcador[] = []
  idUsuario?: string
  constructor(private sqlService: ServicebdService, private auth: AuthService) { }

  async ngOnInit() {
    this.idUsuario = (await firstValueFrom(this.auth.usuarioObservable))?.idUsuario
    await this.sqlService.selectMarcadorPorIdUsuario(this.idUsuario!)
    this.sqlService.listaMarcador.subscribe(res => this.guardados = res)
  }

  async eliminar(idMarcador: string) {
    await this.sqlService.eliminarMarcador(idMarcador, this.idUsuario!)
    this.sqlService.selectMarcadorPorIdUsuario(this.idUsuario!)
  }

  ionViewWillEnter() {
    this.sqlService.selectMarcadorPorIdUsuario(this.idUsuario!)
  }

}
