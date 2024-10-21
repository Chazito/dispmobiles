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
import { insertMarcador, insertResenna, insertRol, insertTipoTitulo, insertTitulo, insertUsuario } from 'src/assets/datos';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {

  database!: SQLiteObject;

  tablaRol: string = "CREATE TABLE IF NOT EXISTS Rol (idRol INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL UNIQUE);";
  tablaTipoTitulo: string = "CREATE TABLE IF NOT EXISTS tipoTitulo (idTipo INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL UNIQUE);";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS Usuario (idUsuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, apellido TEXT NOT NULL, correo TEXT NOT NULL UNIQUE, clave TEXT NOT NULL, fechaNacimiento DATE, avatar TEXT, telefono TEXT, reputacion REAL, id_rol INTEGER NOT NULL, FOREIGN KEY (id_rol) REFERENCES Rol(idRol));";
  tablaTitulo: string = "CREATE TABLE IF NOT EXISTS Titulo (idTitulo INTEGER PRIMARY KEY AUTOINCREMENT, idTipoTitulo INTEGER NOT NULL, nombre TEXT NOT NULL, sinopsis TEXT,puntuacion REAL, duracion TEXT, URLImagen TEXT, URLTrailer TEXT, fechaEstreno DATE, FOREIGN KEY (idTipoTitulo) REFERENCES TipoTitulo(idTipo));";

  tablaResenna: string = "CREATE TABLE IF NOT EXISTS Resenna (idResenna INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL,titulo TEXT, comentario TEXT, fechaPublicacion DATE, calificacion REAL, esVisible INTEGER, fechaEliminada DATE, motivoEliminacion TEXT, URLImagen TEXT, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (idTitulo) REFERENCES Titulo(idTitulo));";
  tablaMarcador: string = "CREATE TABLE IF NOT EXISTS Marcador (idMarcador INTEGER PRIMARY KEY AUTOINCREMENT, idUsuario INTEGER NOT NULL, idTitulo INTEGER NOT NULL, fechaMarcado DATE, FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario), FOREIGN KEY (idTitulo) REFERENCES Titulo(idTitulo));";

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  listaRol = new BehaviorSubject([]);
  listaTipoTitulo = new BehaviorSubject([]);

  listaUsuario = new BehaviorSubject([]);
  listaTitulo = new BehaviorSubject<Titulo[]>([]);

  listaResenna = new BehaviorSubject([]);
  listaMarcador = new BehaviorSubject([]);

  //Home
  listaDestacados = new BehaviorSubject<Titulo[]>([]);
  listaCriticados = new BehaviorSubject<Titulo[]>([]);
  listaMejor = new BehaviorSubject<Titulo[]>([]);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, private storage : Storage) {
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

  //Home
  //Retorna los 10 titulos mas recientes
  fetchDestacados(): Observable<Titulo[]> {
    return this.listaDestacados.asObservable();
  }

  //Retorna los 10 titulos con mayor numero de reseñas
  fetchCriticados(): Observable<Titulo[]> {
    return this.listaCriticados.asObservable();
  }

  //Retorna los 10 titulos con mayor puntuacion
  fetchMejor(): Observable<Titulo[]> {
    return this.listaMejor.asObservable();
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
      }).then(async (bd: SQLiteObject) => {
        this.database = bd;
        await this.crearTablas();
        
        await this.crearDatosIniciales();
        this.isDbReady.next(true);
      }).catch(e => {
        this.presentAlert('Creación de BD', 'Error: ' + JSON.stringify(e));
      });
    }).catch(e => {
      this.presentAlert('Error al preparar la plataforma', JSON.stringify(e));
    });
  }

  async crearDatosIniciales(){
    let initialized = await this.storage.get('initialized');
    if(initialized) return;
    try{
      //Limpiar
      await this.database.executeSql("DELETE FROM marcador",[]);
      await this.database.executeSql("DELETE FROM resenna",[]);
      await this.database.executeSql("DELETE FROM titulo",[]);
      await this.database.executeSql("DELETE FROM usuario",[]);
      await this.database.executeSql("DELETE FROM tipotitulo",[]);
      await this.database.executeSql("DELETE FROM rol",[]);

      //Datos Iniciales
      await this.database.executeSql(insertRol, []);
      await this.database.executeSql(insertTipoTitulo,[]);
      await this.database.executeSql(insertUsuario,[]);
      await this.database.executeSql(insertTitulo,[]);
      await this.database.executeSql(insertResenna,[]);
      await this.database.executeSql(insertMarcador,[]);

      await this.storage.set('initialized',true);
    }catch(e){
      console.log(JSON.stringify(e));
      this.presentAlert('Creación de Tablas', 'Error: ' + JSON.stringify(e));
    }
  }

  async crearTablas() {
    let initialized = await this.storage.get('initialized');
    if(initialized) return;
    try {
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaTipoTitulo, []);
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.tablaTitulo, []);
      await this.database.executeSql(this.tablaResenna, []);
      await this.database.executeSql(this.tablaMarcador, []);

      //await this.database.executeSql("INSERT INTO rol(nombre) values('Usuario')", []);
      //await this.database.executeSql("INSERT INTO rol(nombre) values('Admin')", []);

      await this.database.executeSql("UPDATE usuario SET id_rol = 2 WHERE correo = 'fr.nuneza@duocuc.cl'", []);

    } catch (e) {
      console.log(JSON.stringify(e));
      this.presentAlert('Creación de Tablas', 'Error: ' + JSON.stringify(e));
    }
  }

  selectDestacados() {
    //Por ahora son los recientes
    return this.database.executeSql("SELECT * FROM titulo ORDER BY fechaEstreno DESC", []).then(res => {
      let items: Titulo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          if (i > 9) {
            //Limitar la lista de destacados a 10 items
            break;
          }
          items.push({
            idTitulo: res.rows.item(i).idTitulo,
            idTipoTitulo: res.rows.item(i).idTipoTitulo,
            nombre: res.rows.item(i).nombre,
            sinopsis: res.rows.item(i).sinopsis,
            duracion: res.rows.item(i).duracion,
            URLImagen: res.rows.item(i).URLImagen,
            URLTrailer: res.rows.item(i).URLTrailer,
            fechaEstreno: res.rows.item(i).fechaEstreno
          })
        }
      }
      this.listaDestacados.next(items);
    })
  }

  selectCriticados() {
    let sortedSql = "SELECT titulo.*, COUNT(resenna.idTitulo) AS resenna_count FROM titulo LEFT JOIN resenna ON titulo.idTitulo = resenna.idTitulo GROUP BY titulo.idTitulo ORDER BY resenna_count DESC";
    this.database.executeSql(sortedSql, []).then(res => {
      let items: Titulo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          if (i > 9) {
            //Limitar la lista de destacados a 10 items
            break;
          }
          items.push({
            idTitulo: res.rows.item(i).idTitulo,
            idTipoTitulo: res.rows.item(i).idTipoTitulo,
            nombre: res.rows.item(i).nombre,
            sinopsis: res.rows.item(i).sinopsis,
            duracion: res.rows.item(i).duracion,
            URLImagen: res.rows.item(i).URLImagen,
            URLTrailer: res.rows.item(i).URLTrailer,
            fechaEstreno: res.rows.item(i).fechaEstreno
          })
        }
      }
      this.listaCriticados.next(items as any);
    })
  }

  selectMejores() {
    let sortedSql = "SELECT titulo.*, AVG(resenna.calificacion) AS avg_calificacion FROM titulo LEFT JOIN resenna ON titulo.idTitulo = resenna.idTitulo GROUP BY titulo.idTitulo ORDER BY avg_calificacion DESC";
    this.database.executeSql(sortedSql, []).then(res => {
      let items: Titulo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          if (i > 9) {
            //Limitar la lista de destacados a 10 items
            break;
          }
          items.push({
            idTitulo: res.rows.item(i).idTitulo,
            idTipoTitulo: res.rows.item(i).idTipoTitulo,
            nombre: res.rows.item(i).nombre,
            sinopsis: res.rows.item(i).sinopsis,
            duracion: res.rows.item(i).duracion,
            URLImagen: res.rows.item(i).URLImagen,
            URLTrailer: res.rows.item(i).URLTrailer,
            fechaEstreno: res.rows.item(i).fechaEstreno
          })
        }
      }
      this.listaMejor.next(items as any);
    })
  }

  selectTipoTitulo() {
    return this.database.executeSql("SELECT * FROM tipotitulo", []).then(res => {
      let items: TipoTitulo[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idTipo: res.rows.item(i).idTipo,
            nombre: res.rows.item(i).nombre
          })
        }
      }
      this.listaTipoTitulo.next(items as any);
    })
  }

  modificarRol(x : Rol){
    return this.database.executeSql("UPDATE rol SET nombre = ? WHERE idRol = ?",[x.nombre, x.idRol]).then(res =>{
      this.presentAlert("Rol","Rol modificado correctamente");
      this.selectRol();
    }).catch(e=>{
      this.presentAlert("Rol","Error al modificar: " + JSON.stringify(e));
    })
  }

  insertarRol(x : Rol){
    return this.database.executeSql("INSERT INTO rol(nombre) values(?)",[x.nombre]).then(res =>{
      this.presentAlert("Rol","Rol agregado correctamente");
      this.selectRol();
    }).catch(e=>{
      this.presentAlert("Rol","Error al agregar: " + JSON.stringify(e));
    })
  }

  selectRol() {
    return this.database.executeSql("SELECT * FROM rol", []).then(res => {
      let items: Rol[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idRol: res.rows.item(i).idRol,
            nombre: res.rows.item(i).nombre
          })
        }
      }
      this.listaRol.next(items as any);
    })
  }

  eliminarRol(x: string) {
    return this.database.executeSql("DELETE FROM rol WHERE idRol = ?", [x]).then(res => {
      this.selectRol();
      this.presentAlert("Rol", "Rol eliminado correctamente.");
    }).catch(e => {
      this.presentAlert("Rol", "Error al eliminar: " + JSON.stringify(e));
    });
  }

  selectMarcado() {
    return this.database.executeSql("SELECT * FROM Marcador", []).then(res => {
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
      this.listaMarcador.next(items as any);
    });
  }

  selectTitulo() {
    return this.database.executeSql("SELECT * FROM Titulo", []).then(res => {
      this.presentAlert('Select destacados', JSON.stringify(res))
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

      this.listaTitulo.next(items as any);
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

      this.listaUsuario.next(items as any);
    });
  }

  validarUsuarioPorEmail(email: string, password: string): Promise<Usuario | null> {
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

  selectUsuarioPorId(idUsuario: string): Promise<Usuario | null> {
    const query = "SELECT * FROM Usuario WHERE idUsuario = ?";
    return this.database.executeSql(query, [idUsuario]).then(res => {
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
        return usuario;
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
      return items; // Retorna el array de marcadores
    }).catch(e => {
      console.error("Error al consultar marcadores por ID de usuario", e);
      return []; // Retorna un array vacío en caso de error
    });
  }

  insertarUsuario(newUser: Usuario) {
    let insertSql = "INSERT INTO usuario(nombre, apellido, correo, clave, fechaNacimiento, avatar, telefono, reputacion, id_rol) values(?,?,?,?,?,?,?,?,?)";
    if (newUser.correo == "fr.nuneza@duocuc.cl") {
      newUser.id_rol = 2;
    }
    return this.database.executeSql(insertSql, [newUser.nombre, newUser.apellido, newUser.correo, newUser.clave, newUser.fechaNacimiento, newUser.avatar, newUser.telefono, newUser.reputacion, newUser.id_rol]).then(res => {
      //this.presentAlert("Registro", "Nuevo usuario creado con éxito.");

      this.selectUsuario();
    }).catch(err => {
      this.presentAlert("Registro", "Error: " + JSON.stringify(err));
    });
  }

  insertarResenna(resenna: Resenna) {
    let insertSql = "INSERT INTO resenna(idUsuario , idTitulo ,titulo, comentario , fechaPublicacion , calificacion , esVisible , fechaEliminada , motivoEliminacion) values(?,?,?,?,?,?,?,?,?)";
    return this.database.executeSql(insertSql, [resenna.idUsuario, resenna.idTitulo, resenna.comentario, resenna.fechaPublicacion, resenna.calificacion, resenna.esVisible, resenna.fechaEliminada, resenna.motivoEliminacion]).then(res => {
      this.presentAlert("Nueva Reseña", "Reseña ingresada correctamente.");

    }).catch(err => {
      this.presentAlert("Reseña", "Error: " + JSON.stringify(err));
    });
  }

  insertarTitulo(titulo: Titulo) {
    let insertSql = "INSERT INTO titulo(idTipoTitulo , nombre , sinopsis , duracion , URLImagen , URLTrailer , fechaEstreno) values(?,?,?,?,?,?,?)";
    return this.database.executeSql(insertSql, [titulo.idTipoTitulo, titulo.nombre, titulo.sinopsis, titulo.duracion, titulo.URLImagen, titulo.URLTrailer, titulo.fechaEstreno]).then(res => {
      this.presentAlert("Nuevo Título", "Nuevo título ingresado correctamente");

      this.selectTitulo();
    }).catch(err => {
      this.presentAlert("Nuevo Título", "Error: " + JSON.stringify(err));
    });
  }

  insertarMarcador(marcador: Marcador) {
    let insertSql = "INSERT INTO marcador(idUsuario , idTitulo , fechaMarcado) values(?,?,?)";
    return this.database.executeSql(insertSql, [marcador.idMarcador, marcador.idUsuario, marcador.idTitulo, marcador.fechaMarcado]).then(res => {
      this.presentAlert("Nuevo Marcador", "Marcador guardado.");

      this.selectMarcado();
    }).catch(err => {
      this.presentAlert("Nuevo Marcador", "Error: " + JSON.stringify(err));
    })
  }

  insertarTipoTitulo(tipo: TipoTitulo) {
    let insertSql = "INSERT INTO TipoTitulo(nombre) values(?)";
    this.database.executeSql(insertSql, [tipo.nombre]).then(res => {
      this.presentAlert("Nuevo Tipo", "Nuevo tipo ingresado correctamente.");

      this.selectTipoTitulo();
    }).catch(err => {
      this.presentAlert("Nuevo Tipo", "Error: " + JSON.stringify(err));
    })
  }

  modificarUsuario(usuario: Usuario): Promise<boolean> {
    const query = `
      UPDATE Usuario
      SET nombre = ?,
          apellido = ?,
          correo = ?,
          clave = ?,
          fechaNacimiento = ?,
          avatar = ?,
          telefono = ?,
          reputacion = ?,
          id_rol = ?
      WHERE idUsuario = ?
    `;

    const params = [
      usuario.nombre,
      usuario.apellido,
      usuario.correo,
      usuario.clave,
      usuario.fechaNacimiento,
      usuario.avatar,
      usuario.telefono,
      usuario.reputacion,
      usuario.id_rol,
      usuario.idUsuario
    ];

    return this.database.executeSql(query, params)
      .then(res => {
        if (res.rowsAffected > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        console.error("Error al modificar el usuario", error);
        return false;
      });
  }

  modificarTituloPorId(idTitulo: string, nuevoTitulo: Titulo): Promise<boolean> {
    const query = `
      UPDATE Titulo
      SET idTipoTitulo = ?, nombre = ?, sinopsis = ?, puntuacion = ?, duracion = ?,
          URLImagen = ?, URLTrailer = ?, fechaEstreno = ?
      WHERE idTitulo = ?;
    `;
    const params = [
      nuevoTitulo.idTipoTitulo,
      nuevoTitulo.nombre,
      nuevoTitulo.sinopsis,
      nuevoTitulo.puntuacion,
      nuevoTitulo.duracion,
      nuevoTitulo.URLImagen,
      nuevoTitulo.URLTrailer,
      nuevoTitulo.fechaEstreno,
      idTitulo
    ];

    return this.database.executeSql(query, params).then(res => {
      return res.rowsAffected > 0;
    }).catch(error => {
      console.error("Error al modificar el título por id", error);
      return false;
    });
  }

  modificarResennaPorId(idResenna: string, nuevaResenna: Resenna): Promise<boolean> {
    const query = `
    UPDATE Resenna
    SET idUsuario = ?, idTitulo = ?, comentario = ?, fechaPublicacion = ?,
        calificacion = ?, esVisible = ?, fechaEliminada = ?,
        motivoEliminacion = ?, URLImagen = ?
    WHERE idResenna = ?;
  `;
    const params = [
      nuevaResenna.idUsuario,
      nuevaResenna.idTitulo,
      nuevaResenna.comentario,
      nuevaResenna.fechaPublicacion,
      nuevaResenna.calificacion,
      nuevaResenna.esVisible,
      nuevaResenna.fechaEliminada,
      nuevaResenna.motivoEliminacion,
      nuevaResenna.URLImagen,
      idResenna
    ];

    return this.database.executeSql(query, params).then(res => {
      return res.rowsAffected > 0;
    }).catch(error => {
      console.error("Error al modificar la reseña por id", error);
      return false;
    });
  }


}
