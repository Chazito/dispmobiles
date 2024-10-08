import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rol } from './rol';
import { TipoTitulo } from './tipo-titulo';
import { Usuario } from './usuario';
import { Titulo } from './titulo';
import { Resenna } from './resenna';
import { Marcador } from './marcador';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {

  database !: SQLiteObject;

  tablaRol : string = "CREATE TABLE IF NOT EXISTS Rol (idRol INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL);";
  tablaTipoTitulo : string = "CREATE TABLE IF NOT EXISTS TipoTitulo (idTipo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL);";
  
  tablaUsuario : string = "CREATE TABLE IF NOT EXISTS Usuario (idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, apellido TEXT NOT NULL, correo TEXT NOT NULL, clave TEXT NOT NULL, fechaNacimiento DATE, avatar TEXT, telefono TEXT, reputacion REAL, id_rol INTEGER NOT NULL, FOREIGN KEY (id_rol) REFERENCES Rol(idRol));";
  tablaTitulo : string = "CREATE TABLE IF NOT EXISTS Titulo (idTitulo INTEGER PRIMARY KEY AUTOINCREMENT, idTipoTitulo INTEGER NOT NULL, nombre TEXT NOT NULL, sinopsis TEXT, duracion TEXT, URLImagen TEXT, URLTrailer TEXT, fechaEstreno DATE, FOREIGN KEY (idTipoTitulo) REFERENCES TipoTitulo(idTipo));";
  
  tablaResenna : string = "CREATE TABLE IF NOT EXISTS Resenna (idResenna INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, id_titulo INTEGER NOT NULL, comentario TEXT, fechaPublicacion DATE, calificacion REAL, esVisible BOOLEAN, fechaEliminada DATE, motivoEliminacion TEXT, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (id_titulo) REFERENCES Titulo(idTitulo));";
  tablaMarcador : string = "CREATE TABLE IF NOT EXISTS Marcador (idMarcados INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL, fechaMarcado DATE, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (idTitulo) REFERENCES Titulo(idTitulo));";

  //variable para observable de estado de la Base de Datos
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  listaRol = new BehaviorSubject([]);
  listaTipoTitulo = new BehaviorSubject([]);

  listaUsuario = new BehaviorSubject([]);
  listaTitulo = new BehaviorSubject([]);

  listaResenna = new BehaviorSubject([]);
  listaMarcador = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
   }

  dbState(){
    return this.isDbReady.asObservable();
  }

  fetchRol() : Observable<Rol[]>{
    return this.listaRol.asObservable();
  }

  fetchTipoTitulo() : Observable<TipoTitulo[]>{
    return this.listaTipoTitulo.asObservable();
  }

  fetchUsuario() : Observable<Usuario[]>{
    return this.listaUsuario.asObservable();
  }

  fetchTitulo() : Observable<Titulo[]>{
    return this.listaTitulo.asObservable();
  }

  fetchResenna() : Observable<Resenna[]>{
    return this.listaResenna.asObservable();
  }

  fetchMarcador() : Observable<Marcador[]>{
    return this.listaMarcador.asObservable();
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearBD(){
    //verificar si la plataforma esta lista o no
    this.platform.ready().then(()=>{
      //creamos la base de datos
      this.sqlite.create({
        name: 'bdnoticias.db',
        location: 'default'
      }).then((bd: SQLiteObject)=>{
        //guardar la conexion
        this.database = bd;
        //llamar a la creación de tablas
        this.crearTablas();
        //modificar el estado de mi base de datos
        this.isDbReady.next(true);
      }).catch(e=>{
        this.presentAlert('Creación de BD','Error: ' + JSON.stringify(e));
      })
    })
  }

  async crearTablas(){
    try{
      await this.database.executeSql(this.tablaRol, []);

      await this.database.executeSql(this.tablaTipoTitulo, []);

      await this.database.executeSql(this.tablaUsuario, []);

      await this.database.executeSql(this.tablaTitulo, []);

      await this.database.executeSql(this.tablaResenna, []);

      await this.database.executeSql(this.tablaMarcador, []);

    }catch(e){
      this.presentAlert('Creación de Tablas','Error: ' + JSON.stringify(e));
    }
  }

  selectTipoTitulo(){
    return this.database.executeSql("SELECT * FROM tipotitulo",[]).then(res => {
      let items : TipoTitulo[] = [];
      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            idTipo: res.rows.item(i).idTipo,
            nombre: res.rows.item(i).nombre
          })
        }
      }
    })
  }

  selectRol(){
    return this.database.executeSql("SELECT * FROM rol",[]).then(res => {
      let items : Rol[] = [];
      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            idRol: res.rows.item(i).idRol,
            nombre: res.rows.item(i).nombre
          })
        }
      }
    })
  }

  selectMarcado() {
    return this.database.executeSql("SELECT * FROM Marcador", []).then(res => {
      let items: Marcador[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idMarcados: res.rows.item(i).idMarcados,
            idUsuario: res.rows.item(i).idUsuario,
            idTitulo: res.rows.item(i).idTitulo,
            fechaMarcado: res.rows.item(i).fechaMarcado
          });
        }
      }
    });
  }

  selectTitulo() {
    return this.database.executeSql("SELECT * FROM Titulo", []).then(res => {
      let items: Titulo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idTitulo: res.rows.item(i).idTitulo,
            idTipoTitulo: res.rows.item(i).idTipoTitulo,
            nombre: res.rows.item(i).nombre,
            sinopsis: res.rows.item(i).sinopsis,
            duracion: res.rows.item(i).duracion,
            URLImagen: res.rows.item(i).URLImagen,
            URLTrailer: res.rows.item(i).URLTrailer,
            fechaEstreno: res.rows.item(i).fechaEstreno
          });
        }
      }
    });
  }

  selectUsuario() {
    return this.database.executeSql("SELECT * FROM Usuario", []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idUsuario: res.rows.item(i).idUsuario,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            correo: res.rows.item(i).correo,
            clave: res.rows.item(i).clave,
            fechaNacimiento: res.rows.item(i).fechaNacimiento,
            avatar: res.rows.item(i).avatar,
            telefono: res.rows.item(i).telefono,
            reputacion: res.rows.item(i).reputacion,
            id_rol: res.rows.item(i).id_rol
          });
        }
      }
    });
  }

  selectResenna() {
    return this.database.executeSql("SELECT * FROM Resenna", []).then(res => {
      let items: Resenna[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idResenna: res.rows.item(i).idResenna,
            idUsuario: res.rows.item(i).idUsuario,
            id_titulo: res.rows.item(i).id_titulo,
            comentario: res.rows.item(i).comentario,
            fechaPublicacion: res.rows.item(i).fechaPublicacion,
            calificacion: res.rows.item(i).calificacion,
            esVisible: res.rows.item(i).esVisible,
            fechaEliminada: res.rows.item(i).fechaEliminada,
            motivoEliminacion: res.rows.item(i).motivoEliminacion
          });
        }
      }
    });
  }
}
