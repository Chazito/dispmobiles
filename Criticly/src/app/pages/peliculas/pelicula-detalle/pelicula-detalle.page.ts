import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  pelicula: Titulo = {};
  resenias: Resenna[] = [];
  usuario?: Usuario;
  peliculaGuardada: boolean = false;
  usuariosResena: any = [];
  puntuacionPorcentaje?: number;
  puntuacion?: number;
  isAuth: boolean = false;
  tienePrivilegios: boolean = false;
  visibleCount : number = 3;

  constructor(
    private route: ActivatedRoute,
    private sqlService: ServicebdService, private auth: AuthService, private alertController: AlertController
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
    this.auth.isAdminObservable.subscribe(isAdmin =>{
      this.tienePrivilegios = isAdmin;
    })
    this.auth.usuarioObservable.subscribe(usuario => {
      this.usuario = usuario!;
      if (usuario) {
        this.isAuth = !!(usuario && usuario.idUsuario)
      }
      this.sqlService.selectMarcadorPorIdUsuario(usuario?.idUsuario!).then(res => this.peliculaGuardada = res.some(marcador => marcador.idTitulo === this.pelicula.idTitulo))
    })
  }

  loadMore(){
    this.visibleCount += 3;
  }

  async cargarResenias() {
    try {
      const res = await this.sqlService.selectResennaPorIdTitulo(this.pelicula?.idTitulo!);
      this.resenias = res.filter((resenia: any) => resenia.esVisible === 1);
    } catch (error) {
      console.error('Error al cargar las reseñas:', error);
    }
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

  async suspenderResenia(idResenia: string) {
    const alert = await this.alertController.create({
      header: 'Suspender Reseña',
      inputs: [
        {
          name: 'motivo',
          type: 'textarea',
          placeholder: 'Escribe el motivo de la suspensión',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (data) => {
            if (data.motivo) {
              const fechaActual = new Date().toISOString();
              this.sqlService
                .suspenderResenia(idResenia, fechaActual, data.motivo)
                .then(() => {
                  console.log('Reseña suspendida correctamente');
                  this.cargarResenias()
                })
                .catch((error) => {
                  console.error('Error al suspender la reseña:', error);
                });
            } else {
              console.error('Motivo de suspensión vacío');
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
