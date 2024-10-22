import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Resenna } from 'src/app/services/resenna';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Titulo } from 'src/app/services/titulo';
import { peliculas, resenias } from 'src/assets/datos';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  pelicula: Titulo = peliculas[0]
  resenias: Resenna[] = [];
  usuariosResena : any = [];
  isAuth: boolean = false;
  tienePrivilegios: boolean = false
  constructor(
    private route: ActivatedRoute,
    private sqlService: ServicebdService, private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.sqlService.selectTituloPorId(id).then((pelicula: any) => {
          if (pelicula) {
            this.pelicula = pelicula;
            this.cargarResenias()
          }
        }).catch(() => {
          return peliculas.find(pelicula => pelicula.idTitulo === id);
        });
      }
      
    });
    this.auth.isAuthObservable.subscribe((isAuth) => {
      this.isAuth = isAuth;
      this.tienePrivilegios = this.auth.usuarioValue?.id_rol == 2;
    });
  }

  cargarResenias() {
    this.sqlService.selectResennaPorIdTitulo(this.pelicula?.idTitulo!).then((res: any) => {
      this.resenias = res;
    }).catch((error: any) => {
      console.error('Error al cargar reseñas:', error);
      this.resenias = resenias.filter(resenia => resenia.idTitulo === this.pelicula?.idTitulo)
    });
  }

  get ratingPorcentaje(): number {
    return (this.pelicula!.puntuacion! / 5) * 100;
  }
}
