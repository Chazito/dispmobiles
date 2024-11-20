import { Marcador } from "src/app/services/marcador";
import { Resenna } from "src/app/services/resenna";
import { Rol } from "src/app/services/rol";
import { TipoTitulo } from "src/app/services/tipo-titulo";
import { Titulo } from "src/app/services/titulo";
import { Usuario } from "src/app/services/usuario";

export const peliculas: Titulo[] = [
  {
    idTitulo: '1',
    idTipoTitulo: '1',
    nombre: 'Inception',
    sinopsis: 'Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños compartidos se le da la tarea inversa: plantar una idea en la mente de un CEO.',
    duracion: '148 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/inception-trailer.mp4',
    fechaEstreno: new Date('2010-07-16'),
  },
  {
    idTitulo: '2',
    idTipoTitulo: '1',
    nombre: 'The Matrix',
    sinopsis: 'Un hacker aprende la impactante verdad sobre su realidad y su papel en la guerra contra sus controladores.',
    duracion: '136 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/matrix-trailer.mp4',
    fechaEstreno: new Date('1999-03-31'),
  },
  {
    idTitulo: '3',
    idTipoTitulo: '1',
    nombre: 'Buscando a Nemo',
    sinopsis: 'Un pez payaso llamado Marlin, junto con una pez cirujano azul llamada Dory, busca a su hijo Nemo que ha sido capturado por unos buzos.',
    duracion: '100 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/nemo-trailer.mp4',
    fechaEstreno: new Date('2003-05-30'),
  },
  {
    idTitulo: '4',
    idTipoTitulo: '1',
    nombre: 'Interstellar',
    sinopsis: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    duracion: '169 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/interstellar-trailer.mp4',
    fechaEstreno: new Date('2014-11-07'),
  },
  {
    idTitulo: '5',
    idTipoTitulo: '1',
    nombre: 'The Dark Knight',
    sinopsis: 'Batman enfrenta al Joker, un villano anárquico que desata el caos en Gotham mientras desafía las creencias del héroe.',
    duracion: '152 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/dark-knight-trailer.mp4',
    fechaEstreno: new Date('2008-07-18'),
  },
  {
    idTitulo: '6',
    idTipoTitulo: '1',
    nombre: 'Avatar',
    sinopsis: 'Un ex-marine se adentra en un mundo alienígena y toma partido en la lucha entre los colonizadores humanos y los nativos Na’vi.',
    duracion: '162 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/avatar-trailer.mp4',
    fechaEstreno: new Date('2009-12-18'),
  },
  {
    idTitulo: '7',
    idTipoTitulo: '1',
    nombre: 'Titanic',
    sinopsis: 'Una historia de amor entre Jack y Rose a bordo del desafortunado Titanic que se hunde tras chocar con un iceberg.',
    duracion: '195 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/titanic-trailer.mp4',
    fechaEstreno: new Date('1997-12-19'),
  },
  {
    idTitulo: '8',
    idTipoTitulo: '1',
    nombre: 'Jurassic Park',
    sinopsis: 'Un grupo de visitantes lucha por sobrevivir en un parque temático donde dinosaurios clonados escapan de sus jaulas.',
    duracion: '127 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/jurassic-park-trailer.mp4',
    fechaEstreno: new Date('1993-06-11'),
  },
  {
    idTitulo: '9',
    idTipoTitulo: '1',
    nombre: 'Gladiator',
    sinopsis: 'Un general romano es traicionado y reducido a la esclavitud, buscando venganza contra el emperador que lo traicionó.',
    duracion: '155 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/gladiator-trailer.mp4',
    fechaEstreno: new Date('2000-05-05'),
  },
  {
    idTitulo: '10',
    idTipoTitulo: '1',
    nombre: 'The Shawshank Redemption',
    sinopsis: 'Dos hombres en una prisión encuentran amistad y redención mientras intentan sobrevivir en un entorno brutal.',
    duracion: '142 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/shawshank-trailer.mp4',
    fechaEstreno: new Date('1994-09-23'),
  }
];

export const usuarios: Usuario[] = [
  {
    idUsuario: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    correo: 'juan.perez@example.com',
    clave: 'password123',
    fechaNacimiento: new Date('1990-05-15'),
    telefono: '123456789',
    reputacion: 4.5,
    id_rol: 1 // Rol de usuario estándar
  },
  {
    idUsuario: '2',
    nombre: 'Juan',
    apellido: 'Gómez',
    correo: 'juan.gomez@example.com',
    clave: 'securepassword456',
    fechaNacimiento: new Date('1985-11-23'),
    telefono: '987654321',
    reputacion: 5.0,
    id_rol: 2 // Rol de administrador
  }
];

export const resenias: Resenna[] = [
  {
    idResenna: '1',
    idUsuario: '1',
    idTitulo: '1',
    titulo: 'Impresionante obra visual',
    comentario: 'Una experiencia visual impresionante que desafía la mente. ¡Me encantó!',
    fechaPublicacion: new Date('2023-01-15'),
    calificacion: 5,
    esVisible: 0,
    motivoEliminacion: "ASDAFADFADFAD",
  },
  {
    idResenna: '2',
    idUsuario: '2',
    idTitulo: '1',
    titulo: 'Una trama compleja pero satisfactoria',
    comentario: 'Inception es una obra maestra del cine moderno. La trama es compleja pero muy satisfactoria.',
    fechaPublicacion: new Date('2023-01-20'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '3',
    idUsuario: '1',
    idTitulo: '2',
    titulo: 'Clásico de ciencia ficción',
    comentario: 'Un clásico que redefine la ciencia ficción. Los efectos especiales son asombrosos.',
    fechaPublicacion: new Date('2023-02-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '4',
    idUsuario: '2',
    idTitulo: '2',
    titulo: 'Matrix: relevancia atemporal',
    comentario: 'La Matrix sigue siendo relevante hoy en día. La historia y la filosofía son profundas.',
    fechaPublicacion: new Date('2023-02-15'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '5',
    idUsuario: '1',
    idTitulo: '3',
    titulo: 'Hermosa historia familiar',
    comentario: 'Una hermosa historia sobre la familia y la amistad. Perfecta para todas las edades.',
    fechaPublicacion: new Date('2023-03-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '6',
    idUsuario: '2',
    idTitulo: '3',
    titulo: 'Diversión para todas las edades',
    comentario: 'Divertida y conmovedora, "Buscando a Nemo" es un clásico de Pixar.',
    fechaPublicacion: new Date('2023-03-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '7',
    idUsuario: '1',
    idTitulo: '4',
    titulo: 'Una épica espacial',
    comentario: 'Una epopeya espacial que nos hace reflexionar sobre el futuro de la humanidad.',
    fechaPublicacion: new Date('2023-03-20'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '8',
    idUsuario: '2',
    idTitulo: '4',
    titulo: 'Impresionante y emotiva',
    comentario: 'Interstellar es visualmente impresionante y emocionalmente potente.',
    fechaPublicacion: new Date('2023-03-25'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '9',
    idUsuario: '1',
    idTitulo: '5',
    titulo: 'El mejor Joker de la historia',
    comentario: 'Una película de superhéroes que elevó el género a nuevas alturas. Heath Ledger es increíble como el Joker.',
    fechaPublicacion: new Date('2023-04-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '10',
    idUsuario: '2',
    idTitulo: '5',
    titulo: 'Thriller cautivante',
    comentario: 'Un thriller intenso que mantiene al espectador al borde de su asiento.',
    fechaPublicacion: new Date('2023-04-15'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '11',
    idUsuario: '1',
    idTitulo: '6',
    titulo: 'Animación con profundidad',
    comentario: 'Una obra maestra de la animación con un mensaje profundo sobre la conexión humana.',
    fechaPublicacion: new Date('2023-05-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '12',
    idUsuario: '2',
    idTitulo: '6',
    titulo: 'Cinemática inolvidable',
    comentario: 'Una experiencia cinematográfica inolvidable, con un mundo visualmente impresionante.',
    fechaPublicacion: new Date('2023-05-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '13',
    idUsuario: '1',
    idTitulo: '7',
    titulo: 'Épica historia de amor',
    comentario: 'Una historia de amor épica que se queda contigo mucho después de que termines de ver la película.',
    fechaPublicacion: new Date('2023-05-15'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '14',
    idUsuario: '2',
    idTitulo: '7',
    titulo: 'Actuaciones conmovedoras',
    comentario: 'El guion es impresionante y las actuaciones son conmovedoras.',
    fechaPublicacion: new Date('2023-05-20'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '15',
    idUsuario: '1',
    idTitulo: '8',
    titulo: 'Clásico de aventuras',
    comentario: 'Un clásico de aventuras que nunca pasa de moda. Perfecto para los amantes de los dinosaurios.',
    fechaPublicacion: new Date('2023-06-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '16',
    idUsuario: '2',
    idTitulo: '8',
    titulo: 'Acción y humor para todos',
    comentario: 'La mezcla de acción y humor la hace perfecta para toda la familia.',
    fechaPublicacion: new Date('2023-06-05'),
    calificacion: 4,
    esVisible: 1,
  },
  // Continúa con los siguientes resenias...
];


export const roles: Rol[] = [
  {
    idRol: '0',
    nombre: 'Usuario'
  },
  {
    idRol: '1',
    nombre: 'Administrador'
  }
];

export const tiposTitulo: TipoTitulo[] = [
  {
    idTipo: '1',
    nombre: 'Películas'
  },
  {
    idTipo: '2',
    nombre: 'Series'
  },
  {
    idTipo: '3',
    nombre: 'Documentales'
  }
];

export const marcadores: Marcador[] = [
  {
    idMarcador: '1',
    idUsuario: '1',
    idTitulo: '1',
    fechaMarcado: new Date('2024-10-01')
  },
  {
    idMarcador: '2',
    idUsuario: '2',
    idTitulo: '3',
    fechaMarcado: new Date('2024-10-02')
  },
  {
    idMarcador: '3',
    idUsuario: '1',
    idTitulo: '2',
    fechaMarcado: new Date('2024-10-03')
  },
  {
    idMarcador: '4',
    idUsuario: '2',
    idTitulo: '4',
    fechaMarcado: new Date('2024-10-04')
  },
  {
    idMarcador: '5',
    idUsuario: '1',
    idTitulo: '5',
    fechaMarcado: new Date('2024-10-05')
  },
];
const placeholderBase64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTcwIiB2aWV3Qm94PSIwIDAgMTAwIDE3MCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0RERERERCIvPjxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik0yMy4zMiA4OC43N2gxLjgydjEuMjloLTUuNnYtMS4yOWgyLjA1di01LjkxcTAtLjM1LjAyLS43MmwtMS40NSAxLjIycS0uMTMuMS0uMjUuMTItLjEyLjAzLS4yMy4wMS0uMTEtLjAyLS4xOS0uMDgtLjA5LS4wNS0uMTMtLjExbC0uNTUtLjc1IDMuMDktMi42M2gxLjQydjguODVaTTMzLjc5IDg1cTAgMS4zMi0uMjkgMi4zLS4yOC45Ny0uNzggMS42MS0uNS42NC0xLjE4Ljk1LS42OS4zMS0xLjQ4LjMxdC0xLjQ2LS4zMXEtLjY4LS4zMS0xLjE4LS45NS0uNDktLjY0LS43Ny0xLjYxLS4yOC0uOTgtLjI4LTIuMyAwLTEuMzMuMjgtMi4zLjI4LS45OC43Ny0xLjYxLjUtLjY0IDEuMTgtLjk1LjY3LS4zMSAxLjQ2LS4zMS43OSAwIDEuNDguMzEuNjguMzEgMS4xOC45NS41LjYzLjc4IDEuNjEuMjkuOTcuMjkgMi4zWk0zMiA4NXEwLTEuMS0uMTYtMS44MnQtLjQzLTEuMTVxLS4yNy0uNDMtLjYyLS42LS4zNS0uMTctLjczLS4xNy0uMzcgMC0uNzEuMTctLjM1LjE3LS42Mi42LS4yNi40My0uNDIgMS4xNS0uMTYuNzItLjE2IDEuODJ0LjE2IDEuODJxLjE2LjcyLjQyIDEuMTUuMjcuNDIuNjIuNi4zNC4xNy43MS4xNy4zOCAwIC43My0uMTcuMzUtLjE4LjYyLS42LjI3LS40My40My0xLjE1UTMyIDg2LjEgMzIgODVabTkuOTEgMHEwIDEuMzItLjI5IDIuMy0uMjguOTctLjc4IDEuNjEtLjUuNjQtMS4xOC45NS0uNjkuMzEtMS40OC4zMXQtMS40Ni0uMzFxLS42OC0uMzEtMS4xOC0uOTUtLjQ5LS42NC0uNzctMS42MS0uMjgtLjk4LS4yOC0yLjMgMC0xLjMzLjI4LTIuMy4yOC0uOTguNzctMS42MS41LS42NCAxLjE4LS45NS42Ny0uMzEgMS40Ni0uMzEuNzkgMCAxLjQ4LjMxLjY4LjMxIDEuMTguOTUuNS42My43OCAxLjYxLjI5Ljk3LjI5IDIuM1ptLTEuNzkgMHEwLTEuMS0uMTYtMS44MnQtLjQzLTEuMTVxLS4yNy0uNDMtLjYyLS42LS4zNS0uMTctLjczLS4xNy0uMzcgMC0uNzEuMTctLjM1LjE3LS42Mi42LS4yNi40My0uNDIgMS4xNS0uMTYuNzItLjE2IDEuODJ0LjE2IDEuODJxLjE2LjcyLjQyIDEuMTUuMjcuNDIuNjIuNi4zNC4xNy43MS4xNy4zOCAwIC43My0uMTcuMzUtLjE4LjYyLS42LjI3LS40My40My0xLjE1LjE2LS43Mi4xNi0xLjgyWm0xMi45IDIuNzQtLjkxLjkxLTIuMzgtMi4zOC0yLjM5IDIuMzktLjkyLS45IDIuNC0yLjQtMi4yOS0yLjI5LjkxLS45MSAyLjI5IDIuMjkgMi4yNi0yLjI3LjkzLjkxLTIuMjggMi4yNyAyLjM4IDIuMzhabTkuNTkgMS4wM2gxLjgydjEuMjloLTUuNnYtMS4yOWgyLjA1di01LjkxcTAtLjM1LjAyLS43MmwtMS40NiAxLjIycS0uMTIuMS0uMjUuMTItLjEyLjAzLS4yMy4wMS0uMTEtLjAyLS4xOS0uMDgtLjA4LS4wNS0uMTMtLjExbC0uNTQtLjc1IDMuMDktMi42M2gxLjQydjguODVabTMuMzQtOC44M2g3di43NXEwIC4zMy0uMDcuNTQtLjA3LjIxLS4xNC4zNWwtMy44NCA3Ljg5cS0uMTIuMjUtLjM0LjQyLS4yMS4xNy0uNTguMTdoLTEuMjVsMy45MS03Ljc0cS4xNC0uMjMuMjctLjQzLjEyLS4yLjI5LS4zOGgtNC44NXEtLjE2IDAtLjI4LS4xMi0uMTItLjEyLS4xMi0uMjh2LTEuMTdaTTgxLjE5IDg1cTAgMS4zMi0uMjggMi4zLS4yOS45Ny0uNzkgMS42MS0uNS42NC0xLjE4Ljk1LS42OC4zMS0xLjQ3LjMxLS43OSAwLTEuNDctLjMxLS42Ny0uMzEtMS4xNy0uOTUtLjUtLjY0LS43OC0xLjYxLS4yOC0uOTgtLjI4LTIuMyAwLTEuMzMuMjgtMi4zLjI4LS45OC43OC0xLjYxLjUtLjY0IDEuMTctLjk1LjY4LS4zMSAxLjQ3LS4zMS43OSAwIDEuNDcuMzEuNjguMzEgMS4xOC45NS41LjYzLjc5IDEuNjEuMjguOTcuMjggMi4zWm0tMS43OCAwcTAtMS4xLS4xNi0xLjgyLS4xNy0uNzItLjQzLTEuMTUtLjI3LS40My0uNjItLjYtLjM1LS4xNy0uNzMtLjE3LS4zNyAwLS43Mi4xN3QtLjYxLjZxLS4yNy40My0uNDMgMS4xNS0uMTUuNzItLjE1IDEuODJ0LjE1IDEuODJxLjE2LjcyLjQzIDEuMTUuMjYuNDIuNjEuNi4zNS4xNy43Mi4xNy4zOCAwIC43My0uMTcuMzUtLjE4LjYyLS42LjI2LS40My40My0xLjE1LjE2LS43Mi4xNi0xLjgyWiIvPjwvc3ZnPg== "

export const insertRol: string = `INSERT INTO rol (idRol, nombre) VALUES
('1', 'Usuario'),
('2', 'Administrador');`

export const insertTipoTitulo: string = `INSERT INTO tipoTitulo (idTipo, nombre) VALUES
('1', 'Películas'),
('2', 'Series')`

export const insertUsuario: string = `INSERT INTO usuario (idUsuario, nombre, apellido, correo, clave, fechaNacimiento, telefono, reputacion, id_rol) VALUES
('1', 'Juan', 'Pérez', 'juan.perez@example.com', 'password123', '1990-05-15',  '123456789', 4.5, 1),
('2', 'Juan', 'Gómez', '123@123.com', '123', '1985-11-23', '987654321', 5.0, 2),
('3', 'Franco', 'Nunez', 'fr.nuneza@duocuc.cl', 'Admin@1234', '1998-04-23', '11112222', 5.0, 2);`

export const insertTitulo: string = `INSERT INTO titulo (idTitulo, idTipoTitulo, nombre, sinopsis, duracion, URLImagen, URLTrailer, fechaEstreno) VALUES
('1', '1', 'Inception', 'Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños compartidos se le da la tarea inversa: plantar una idea en la mente de un CEO.', '148 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=YoHD9XEInc0', '2010-07-16'),
('2', '1', 'The Matrix', 'Un hacker aprende la impactante verdad sobre su realidad y su papel en la guerra contra sus controladores.', '136 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=vKQi3bBA1y8', '1999-03-31'),
('3', '1', 'Buscando a Nemo', 'Un pez payaso llamado Marlin, junto con una pez cirujano azul llamada Dory, busca a su hijo Nemo que ha sido capturado por unos buzos.', '100 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=wZdpNglLbt8', '2003-05-30'),
('4', '1', 'Interstellar', 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.', '169 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=zSWdZVtXT7E', '2014-11-07'),
('5', '1', 'The Dark Knight', 'Batman enfrenta al Joker, un villano anárquico que desata el caos en Gotham mientras desafía las creencias del héroe.', '152 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=EXeTwQWrcwY', '2008-07-18'),
('6', '1', 'Avatar', 'Un ex-marine se adentra en un mundo alienígena y toma partido en la lucha entre los colonizadores humanos y los nativos Na’vi.', '162 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=5PSNL1qE6VY', '2009-12-18'),
('7', '1', 'Titanic', 'Una historia de amor entre Jack y Rose a bordo del desafortunado Titanic que se hunde tras chocar con un iceberg.', '195 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=2e-eXJ6HgkQ', '1997-12-19'),
('8', '1', 'Jurassic Park', 'Un grupo de visitantes lucha por sobrevivir en un parque temático donde dinosaurios clonados escapan de sus jaulas.', '127 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=lc0UehYemQA', '1993-06-11'),
('9', '1', 'Gladiator', 'Un general romano es traicionado y reducido a la esclavitud, buscando venganza contra el emperador que lo traicionó.', '155 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=owK1qxDselE', '2000-05-05'),
('10', '1', 'The Shawshank Redemption', 'Dos hombres en una prisión encuentran amistad y redención mientras intentan sobrevivir en un entorno brutal.', '142 min', '${placeholderBase64}', 'https://www.youtube.com/watch?v=6hB3S9bIaco', '1994-09-23');
`;


export const insertResenna = `INSERT INTO resenna (idResenna, idUsuario, idTitulo, titulo, comentario, fechaPublicacion, calificacion, esVisible) VALUES
('1', '1', '1', 'Impresionante visualmente', 'Una experiencia visual impresionante que desafía la mente. ¡Me encantó!', '2023-01-15', 5, 1),
('2', '2', '1', 'Obra maestra moderna', 'Inception es una obra maestra del cine moderno. La trama es compleja pero muy satisfactoria.', '2023-01-20', 4, 1),
('3', '1', '2', 'Clásico de ciencia ficción', 'Un clásico que redefine la ciencia ficción. Los efectos especiales son asombrosos.', '2023-02-10', 5, 1),
('4', '2', '2', 'Relevante y profunda', 'La Matrix sigue siendo relevante hoy en día. La historia y la filosofía son profundas.', '2023-02-15', 4, 1),
('5', '1', '3', 'Historia conmovedora', 'Una hermosa historia sobre la familia y la amistad. Perfecta para todas las edades.', '2023-03-01', 5, 1),
('6', '2', '3', 'Pixar en su mejor momento', 'Divertida y conmovedora, "Buscando a Nemo" es un clásico de Pixar.', '2023-03-05', 4, 1),
('7', '1', '4', 'Epopeya espacial reflexiva', 'Una epopeya espacial que nos hace reflexionar sobre el futuro de la humanidad.', '2023-03-20', 5, 1),
('8', '2', '4', 'Impresionante y emotiva', 'Interstellar es visualmente impresionante y emocionalmente potente.', '2023-03-25', 4, 1),
('9', '1', '5', 'Superhéroes redefinidos', 'Una película de superhéroes que elevó el género a nuevas alturas. Heath Ledger es increíble como el Joker.', '2023-04-10', 5, 1),
('10', '2', '5', 'Thriller trepidante', 'Un thriller intenso que mantiene al espectador al borde de su asiento.', '2023-04-15', 4, 1),
('11', '1', '6', 'Obra maestra animada', 'Una obra maestra de la animación con un mensaje profundo sobre la conexión humana.', '2023-05-01', 5, 1),
('12', '2', '6', 'Visualmente impresionante', 'Una experiencia cinematográfica inolvidable, con un mundo visualmente impresionante.', '2023-05-05', 4, 1),
('13', '1', '7', 'Amor épico', 'Una historia de amor épica que se queda contigo mucho después de que termines de ver la película.', '2023-05-15', 5, 1),
('14', '2', '7', 'Guion y actuaciones brillantes', 'El guion es impresionante y las actuaciones son conmovedoras.', '2023-05-20', 4, 1),
('15', '1', '8', 'Aventura atemporal', 'Un clásico de aventuras que nunca pasa de moda. Perfecto para los amantes de los dinosaurios.', '2023-06-01', 5, 1),
('16', '2', '8', 'Acción y humor familiar', 'La mezcla de acción y humor la hace perfecta para toda la familia.', '2023-06-05', 4, 1),
('17', '1', '1', 'Trama cautivadora', 'Una trama que me hizo pensar durante días. La dirección es impecable.', '2023-01-30', 5, 1),
('18', '2', '1', 'Viaje inolvidable', 'No puedo creer cómo lograron hacer algo tan único. Un viaje inolvidable.', '2023-02-05', 5, 1),
('19', '1', '2', 'Impacto visual', 'Impactante en muchos niveles. Los efectos son revolucionarios.', '2023-02-20', 5, 1),
('20', '2', '2', 'Filosofía fascinante', 'La filosofía detrás de la historia es realmente fascinante.', '2023-02-25', 4, 1),
('21', '1', '3', 'Aventura encantadora', 'Una aventura maravillosa que nunca deja de hacerme sonreír.', '2023-03-10', 5, 1),
('22', '2', '3', 'Diversión familiar', 'Perfecta para ver en familia. Las animaciones son hermosas.', '2023-03-12', 4, 1),
('23', '1', '4', 'Ciencia y emoción', 'Una obra maestra que combina ciencia y emoción de manera extraordinaria.', '2023-04-01', 5, 1),
('24', '2', '4', 'Amor y sacrificio', 'Me encanta cómo explora el amor y el sacrificio. ¡Inolvidable!', '2023-04-05', 4, 1),
('25', '1', '5', 'Mejor película de superhéroes', 'Es simplemente la mejor película de superhéroes que se ha hecho. Ledger es un genio.', '2023-04-20', 5, 1),
('26', '2', '5', 'Thriller redefinido', 'Un thriller intenso que redefine el género. ¡Imperdible!', '2023-04-25', 5, 1),
('27', '1', '6', 'Visualmente asombroso', 'Visualmente asombroso, una experiencia que trasciende la pantalla.', '2023-05-10', 5, 1),
('28', '2', '6', 'Historia conmovedora', 'Una historia conmovedora en un mundo impresionante. ¡Quiero más!', '2023-05-12', 4, 1),
('29', '1', '7', 'Historia de amor inolvidable', 'Una historia de amor que nunca me canso de ver. Simplemente hermosa.', '2023-05-18', 5, 1),
('30', '2', '7', 'Música y actuación inolvidables', 'La música y la actuación son inolvidables. ¡Un clásico!', '2023-05-22', 4, 1),
('31', '1', '8', 'Aventura que cambió el cine', 'Una aventura que cambió el cine para siempre. Los dinosaurios son geniales.', '2023-06-10', 5, 1),
('32', '2', '8', 'Nostalgia eterna', '¡La nostalgia es real! Un clásico que nunca pierde su encanto.', '2023-06-12', 4, 1);`

export const insertMarcador = `INSERT INTO marcador (idMarcador, idUsuario, idTitulo, fechaMarcado) VALUES
('1', '1', '1', '2024-10-01'),
('2', '2', '3', '2024-10-02'),
('3', '1', '2', '2024-10-03'),
('4', '2', '4', '2024-10-04'),
('5', '1', '5', '2024-10-05');`

