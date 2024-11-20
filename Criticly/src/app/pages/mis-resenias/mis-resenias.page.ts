import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-mis-resenias',
  templateUrl: './mis-resenias.page.html',
  styleUrls: ['./mis-resenias.page.scss'],
})
export class MisReseniasPage implements OnInit {

  resenias: any = []
  idUsuario?: string
  constructor(private sqlService: ServicebdService, private auth: AuthService, private router: Router) { }

  async ngOnInit() {
    this.idUsuario = (await firstValueFrom(this.auth.usuarioObservable))?.idUsuario
    await this.sqlService.selectResennaPorIdUsuario(this.idUsuario!).then(res => this.resenias = res)
  }

  async eliminar(idResenia: string) {
    await this.sqlService.eliminarResenna(idResenia)
    this.sqlService.selectResennaPorIdUsuario(this.idUsuario!).then(res => this.resenias = res)
  }

  modificar(id: string) {
    this.router.navigate(['/modificar-resenia', id]);
  }

  ionViewWillEnter() {
    if (!this.idUsuario) return
    this.sqlService.selectResennaPorIdUsuario(this.idUsuario!).then(res => this.resenias = res)
  }
}
