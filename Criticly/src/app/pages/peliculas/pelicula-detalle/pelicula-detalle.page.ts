import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  pelicula: Titulo = {}
  resenias: Resenna[] = [];
  usuario?: Usuario
  peliculaGuardada: boolean = false
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
      this.usuario = usuario!
      if (usuario && usuario.id_rol === 2) {
        this.isAuth = !!(usuario && usuario.idUsuario)
        this.tienePrivilegios = true
      } else {
        this.tienePrivilegios = false
      }
      this.sqlService.selectMarcadorPorIdUsuario(usuario?.idUsuario!).then(res => this.peliculaGuardada = res.some(marcador => marcador.idTitulo === this.pelicula.idTitulo))
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

  guardar() {
    this.sqlService.insertarMarcador({ idUsuario: this.usuario?.idUsuario, idTitulo: this.pelicula.idTitulo, fechaMarcado: new Date() }).then(() => this.peliculaGuardada = true)
  }

  async eliminar() {
    const idMarcador = (await this.sqlService.selectMarcadorPorIdUsuario(this.usuario?.idUsuario!)).find(res => res.idTitulo === this.pelicula.idTitulo)?.idMarcador
    this.sqlService.eliminarMarcador(idMarcador!, this.usuario?.idUsuario!).then(() => this.peliculaGuardada = false)
  }
}
