import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  pelicula: Titulo = {}
  resenias: Resenna[] = [];
  usuariosResena: any = [];
  puntuacionPorcentaje?: number
  puntuacion?: number
  isAuth: boolean = false;
  tienePrivilegios: boolean = false
  constructor(
    private route: ActivatedRoute,
    private sqlService: ServicebdService, private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        await this.sqlService.selectTituloPorId(id).then(async (pelicula: any) => {
          if (pelicula) {
            this.pelicula = pelicula;
            await this.cargarResenias()
            await this.obtenerPuntuacion()
          }
        }).catch();
      }

    });
    this.auth.usuarioObservable.subscribe(usuario => {
      if (usuario && usuario.id_rol === 2) {
        this.isAuth = !!(usuario && usuario.idUsuario)
        this.tienePrivilegios = true
      } else {
        this.tienePrivilegios = false
      }
    })
  }

  async cargarResenias() {
    await this.sqlService.selectResennaPorIdTitulo(this.pelicula?.idTitulo!).then((res: any) => {
      this.resenias = res;
    }).catch();
  }

  async obtenerPuntuacion() {
    this.puntuacion = await this.sqlService.obtenerPuntuacionPromedioPorId(this.pelicula.idTitulo!)
    this.puntuacionPorcentaje = this.puntuacion * 2 * 10
  }
}
