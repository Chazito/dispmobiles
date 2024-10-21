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

  database!: SQLiteObject;

  tablaRol: string = "CREATE TABLE IF NOT EXISTS Rol (idRol INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL);";
  tablaTipoTitulo: string = "CREATE TABLE IF NOT EXISTS TipoTitulo (idTipo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL);";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS Usuario (idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, apellido TEXT NOT NULL, correo TEXT NOT NULL UNIQUE, clave TEXT NOT NULL, fechaNacimiento DATE, avatar TEXT, telefono TEXT, reputacion REAL, id_rol INTEGER NOT NULL, FOREIGN KEY (id_rol) REFERENCES Rol(idRol));";
  tablaTitulo: string = "CREATE TABLE IF NOT EXISTS Titulo (idTitulo INTEGER PRIMARY KEY AUTOINCREMENT, idTipoTitulo INTEGER NOT NULL, nombre TEXT NOT NULL, sinopsis TEXT, duracion TEXT, URLImagen TEXT, URLTrailer TEXT, fechaEstreno DATE, FOREIGN KEY (idTipoTitulo) REFERENCES TipoTitulo(idTipo));";

  tablaResenna: string = "CREATE TABLE IF NOT EXISTS Resenna (idResenna INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL, comentario TEXT, fechaPublicacion DATE, calificacion REAL, esVisible INTEGER, fechaEliminada DATE, motivoEliminacion TEXT, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (id_titulo) REFERENCES Titulo(idTitulo));";
  tablaMarcador: string = "CREATE TABLE IF NOT EXISTS Marcador (idMarcador INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL, fechaMarcado DATE, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (idTitulo) REFERENCES Titulo(idTitulo));";

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

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchRol(): Observable<Rol[]> {
    return this.listaRol.asObservable();
  }

  fetchTipoTitulo(): Observable<TipoTitulo[]> {
    return this.listaTipoTitulo.asObservable();
  }

  fetchUsuario(): Observable<Usuario[]> {
    return this.listaUsuario.asObservable();
  }

  fetchTitulo(): Observable<Titulo[]> {
    return this.listaTitulo.asObservable();
  }

  fetchResenna(): Observable<Resenna[]> {
    return this.listaResenna.asObservable();
  }

  fetchMarcador(): Observable<Marcador[]> {
    return this.listaMarcador.asObservable();
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'critical.db',
        location: 'default'
      }).then((bd: SQLiteObject) => {
        this.database = bd;
        this.crearTablas();
        this.isDbReady.next(true);
      }).catch(e => {
        this.presentAlert('Creación de BD', 'Error: ' + JSON.stringify(e));
      });
    });
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaRol, []);

      await this.database.executeSql(this.tablaTipoTitulo, []);

      await this.database.executeSql(this.tablaUsuario, []);

      await this.database.executeSql(this.tablaTitulo, []);

      await this.database.executeSql(this.tablaResenna, []);

      await this.database.executeSql(this.tablaMarcador, []);

    } catch (e) {
      this.presentAlert('Creación de Tablas', 'Error: ' + JSON.stringify(e));
    }
  }

  selectMarcadorPorIdUsuario(idUsuario: string): Promise<Marcador[]> {
    const query = "SELECT * FROM Marcador WHERE idUsuario = ?";
    return this.database.executeSql(query, [idUsuario]).then(res => {
      let items: Marcador[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            idMarcador: res.rows.item(i).idMarcador,
            idUsuario: res.rows.item(i).idUsuario,
            idTitulo: res.rows.item(i).idTitulo,
            fechaMarcado: res.rows.item(i).fechaMarcado
          });
        }
      }
      return items;
    }).catch(e => {
      console.error("Error al consultar marcadores por ID de usuario", e);
      return [];
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

  selectUsuarioPorEmail(email: string, password: string): Promise<Usuario | null> {
    const query = "SELECT * FROM Usuario WHERE correo = ?";
    return this.database.executeSql(query, [email]).then(res => {
      if (res.rows.length > 0) {
        const usuario: Usuario = {
          idUsuario: res.rows.item(0).idUsuario,
          nombre: res.rows.item(0).nombre,
          apellido: res.rows.item(0).apellido,
          correo: res.rows.item(0).correo,
          clave: res.rows.item(0).clave,
          fechaNacimiento: res.rows.item(0).fechaNacimiento,
          avatar: res.rows.item(0).avatar,
          telefono: res.rows.item(0).telefono,
          reputacion: res.rows.item(0).reputacion,
          id_rol: res.rows.item(0).id_rol
        };

        if (usuario.clave === password) {
          return usuario;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }).catch(error => {
      console.error("Error al consultar el usuario por email", error);
      return null;
    });
  }

  selectResennaPorIdTitulo(idTitulo: string): Promise<Resenna[]> {
    const query = "SELECT * FROM Resenna WHERE idTitulo = ?";
    return this.database.executeSql(query, [idTitulo]).then(res => {
      let items: Resenna[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            idResenna: res.rows.item(i).idResenna,
            idUsuario: res.rows.item(i).idUsuario,
            idTitulo: res.rows.item(i).idTitulo,
            comentario: res.rows.item(i).comentario,
            fechaPublicacion: res.rows.item(i).fechaPublicacion,
            calificacion: res.rows.item(i).calificacion,
            esVisible: res.rows.item(i).esVisible,
            fechaEliminada: res.rows.item(i).fechaEliminada,
            motivoEliminacion: res.rows.item(i).motivoEliminacion
          });
        }
      }
      return items;
    }).catch(e => {
      console.error("Error al consultar reseñas por ID de título", e);
      return [];
    });
  }

  selectTituloPorId(idTitulo: string): Promise<Titulo | null> {
    const query = "SELECT * FROM Titulo WHERE idTitulo = ?";
    return this.database.executeSql(query, [idTitulo]).then(res => {
      if (res.rows.length > 0) {
        const titulo: Titulo = {
          idTitulo: res.rows.item(0).idTitulo,
          idTipoTitulo: res.rows.item(0).idTipoTitulo,
          nombre: res.rows.item(0).nombre,
          sinopsis: res.rows.item(0).sinopsis,
          duracion: res.rows.item(0).duracion,
          URLImagen: res.rows.item(0).URLImagen,
          URLTrailer: res.rows.item(0).URLTrailer,
          fechaEstreno: res.rows.item(0).fechaEstreno
        };
        return titulo;
      } else {
        return null;
      }
    }).catch(e => {
      console.error("Error al consultar el título por ID", e);
      return null;
    });
  }

  insertarUsuario(usuario: Usuario): Promise<any> {
    const query = `
      INSERT INTO Usuario (nombre, apellido, correo, clave, fechaNacimiento, avatar, telefono, reputacion, id_rol)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    return this.database.executeSql(query, [
      usuario.nombre,
      usuario.apellido,
      usuario.correo,
      usuario.clave,
      usuario.fechaNacimiento,
      usuario.avatar,
      usuario.telefono,
      usuario.reputacion,
      usuario.id_rol || 0
    ]).then(() => {
      return { success: true };
    }).catch(e => {
      console.error("Error al insertar usuario", e);
      return { success: false, error: e };
    });
  }

  insertarMarcador(marcador: Marcador): Promise<any> {
    const query = `
      INSERT INTO Marcador (idUsuario, idTitulo, fechaMarcado)
      VALUES (?, ?, ?)
    `;

    return this.database.executeSql(query, [
      marcador.idUsuario,
      marcador.idTitulo,
      marcador.fechaMarcado
    ]).then(res => {
      return { success: true, id: res.insertId };
    }).catch(e => {
      console.error("Error al insertar marcador", e);
      return { success: false, error: e };
    });
  }

  insertarResenna(resenna: Resenna): Promise<any> {
    const query = `
      INSERT INTO Resenna (idUsuario, id_titulo, comentario, fechaPublicacion, calificacion, esVisible, fechaEliminada, motivoEliminacion)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    return this.database.executeSql(query, [
      resenna.idUsuario,
      resenna.idTitulo,
      resenna.comentario,
      resenna.fechaPublicacion,
      resenna.calificacion,
      resenna.esVisible,
      resenna.fechaEliminada,
      resenna.motivoEliminacion
    ]).then(res => {
      return { success: true, id: res.insertId };
    }).catch(e => {
      console.error("Error al insertar reseña", e);
      return { success: false, error: e };
    });
  }

  insertarTitulo(titulo: Titulo): Promise<any> {
    const query = `
      INSERT INTO Titulo (idTipoTitulo, nombre, sinopsis, duracion, URLImagen, URLTrailer, fechaEstreno)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    return this.database.executeSql(query, [
      titulo.idTipoTitulo,
      titulo.nombre,
      titulo.sinopsis,
      titulo.duracion,
      titulo.URLImagen,
      titulo.URLTrailer,
      titulo.fechaEstreno
    ]).then(res => {
      return { success: true, id: res.insertId };
    }).catch(e => {
      console.error("Error al insertar título", e);
      return { success: false, error: e };
    });
  }

  eliminarTitulo(idTitulo: string): Promise<any> {
    const query = "DELETE FROM Titulo WHERE idTitulo = ?";
    return this.database.executeSql(query, [idTitulo])
      .then(res => {
        if (res.rowsAffected > 0) {
          return { success: true };
        } else {
          return { success: false, message: "No se encontró el título con el ID especificado." };
        }
      })
      .catch(e => {
        console.error("Error al eliminar el título", e);
        return { success: false, error: e };
      });
  }

  eliminarUsuario(idUsuario: string): Promise<any> {
    const query = "DELETE FROM Usuario WHERE idUsuario = ?";
    return this.database.executeSql(query, [idUsuario])
      .then(res => {
        if (res.rowsAffected > 0) {
          return { success: true };
        } else {
          return { success: false, message: "No se encontró el usuario con el ID especificado." };
        }
      })
      .catch(e => {
        console.error("Error al eliminar el usuario", e);
        return { success: false, error: e };
      });
  }

  eliminarMarcador(idMarcador: string): Promise<any> {
    const query = "DELETE FROM Marcador WHERE idMarcador = ?";
    return this.database.executeSql(query, [idMarcador])
      .then(res => {
        if (res.rowsAffected > 0) {
          return { success: true };
        } else {
          return { success: false, message: "No se encontró el marcador con el ID especificado." };
        }
      })
      .catch(e => {
        console.error("Error al eliminar el marcador", e);
        return { success: false, error: e };
      });
  }
  eliminarResenna(idResenna: string): Promise<any> {
    const query = "DELETE FROM Resenna WHERE idResenna = ?";
    return this.database.executeSql(query, [idResenna])
      .then(res => {
        if (res.rowsAffected > 0) {
          return { success: true };
        } else {
          return { success: false, message: "No se encontró la reseña con el ID especificado." };
        }
      })
      .catch(e => {
        console.error("Error al eliminar la reseña", e);
        return { success: false, error: e };
      });
  }
}
