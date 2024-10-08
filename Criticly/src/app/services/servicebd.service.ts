import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

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
  tablaMarcador : string = "CREATE TABLE IF NOT EXISTS Marcado (idMarcados INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL, fechaMarcado DATE, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (idTitulo) REFERENCES Titulo(idTitulo));";

  //variable para observable de estado de la Base de Datos
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
   }

  dbState(){
    return this.isDbReady.asObservable();
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
}
