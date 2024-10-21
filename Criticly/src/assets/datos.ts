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
    fechaEstreno: new Date('2010-07-16')
  },
  {
    idTitulo: '2',
    idTipoTitulo: '1',
    nombre: 'The Matrix',
    sinopsis: 'Un hacker aprende la impactante verdad sobre su realidad y su papel en la guerra contra sus controladores.',
    duracion: '136 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/matrix-trailer.mp4',
    fechaEstreno: new Date('1999-03-31')
  },
  {
    idTitulo: '3',
    idTipoTitulo: '1',
    nombre: 'Buscando a Nemo',
    sinopsis: 'Un pez payaso llamado Marlin, junto con una pez cirujano azul llamada Dory, busca a su hijo Nemo que ha sido capturado por unos buzos.',
    duracion: '100 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/nemo-trailer.mp4',
    fechaEstreno: new Date('2003-05-30')
  },
  {
    idTitulo: '4',
    idTipoTitulo: '1',
    nombre: 'Interstellar',
    sinopsis: 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    duracion: '169 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/interstellar-trailer.mp4',
    fechaEstreno: new Date('2014-11-07')
  },
  {
    idTitulo: '5',
    idTipoTitulo: '1',
    nombre: 'The Dark Knight',
    sinopsis: 'Batman enfrenta al Joker, un villano anárquico que desata el caos en Gotham mientras desafía las creencias del héroe.',
    duracion: '152 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/dark-knight-trailer.mp4',
    fechaEstreno: new Date('2008-07-18')
  },
  {
    idTitulo: '6',
    idTipoTitulo: '1',
    nombre: 'Avatar',
    sinopsis: 'Un ex-marine se adentra en un mundo alienígena y toma partido en la lucha entre los colonizadores humanos y los nativos Na’vi.',
    duracion: '162 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/avatar-trailer.mp4',
    fechaEstreno: new Date('2009-12-18')
  },
  {
    idTitulo: '7',
    idTipoTitulo: '1',
    nombre: 'Titanic',
    sinopsis: 'Una historia de amor entre Jack y Rose a bordo del desafortunado Titanic que se hunde tras chocar con un iceberg.',
    duracion: '195 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/titanic-trailer.mp4',
    fechaEstreno: new Date('1997-12-19')
  },
  {
    idTitulo: '8',
    idTipoTitulo: '1',
    nombre: 'Jurassic Park',
    sinopsis: 'Un grupo de visitantes lucha por sobrevivir en un parque temático donde dinosaurios clonados escapan de sus jaulas.',
    duracion: '127 min',
    URLImagen: 'https://placehold.co/100x170',
    URLTrailer: 'https://example.com/jurassic-park-trailer.mp4',
    fechaEstreno: new Date('1993-06-11')
  },
];

export const usuarios: Usuario[] = [
  {
    idUsuario: '1',
    nombre: 'Juan',
    apellido: 'Pérez',
    correo: 'juan.perez@example.com',
    clave: 'password123',
    fechaNacimiento: new Date('1990-05-15'),
    avatar: 'https://example.com/avatar-juan.jpg',
    telefono: '123456789',
    reputacion: 4.5,
    id_rol: 0 // Rol de usuario estándar
  },
  {
    idUsuario: '2',
    nombre: 'Ana',
    apellido: 'Gómez',
    correo: 'ana.gomez@example.com',
    clave: 'securepassword456',
    fechaNacimiento: new Date('1985-11-23'),
    avatar: 'https://example.com/avatar-ana.jpg',
    telefono: '987654321',
    reputacion: 5.0,
    id_rol: 1 // Rol de administrador
  }
];
