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
    puntuacion: 4.8
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
    puntuacion: 4.7
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
    puntuacion: 4.5
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
    puntuacion: 4.6
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
    puntuacion: 4.9
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
    puntuacion: 4.4
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
    puntuacion: 4.7
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
    puntuacion: 4.6
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
    puntuacion: 4.8
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
    puntuacion: 4.9
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

export const resenias: Resenna[] = [
  {
    idResenna: '1',
    idUsuario: '1',
    idTitulo: '1',
    comentario: 'Una experiencia visual impresionante que desafía la mente. ¡Me encantó!',
    fechaPublicacion: new Date('2023-01-15'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '2',
    idUsuario: '2',
    idTitulo: '1',
    comentario: 'Inception es una obra maestra del cine moderno. La trama es compleja pero muy satisfactoria.',
    fechaPublicacion: new Date('2023-01-20'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '3',
    idUsuario: '1',
    idTitulo: '2',
    comentario: 'Un clásico que redefine la ciencia ficción. Los efectos especiales son asombrosos.',
    fechaPublicacion: new Date('2023-02-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '4',
    idUsuario: '2',
    idTitulo: '2',
    comentario: 'La Matrix sigue siendo relevante hoy en día. La historia y la filosofía son profundas.',
    fechaPublicacion: new Date('2023-02-15'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '5',
    idUsuario: '1',
    idTitulo: '3',
    comentario: 'Una hermosa historia sobre la familia y la amistad. Perfecta para todas las edades.',
    fechaPublicacion: new Date('2023-03-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '6',
    idUsuario: '2',
    idTitulo: '3',
    comentario: 'Divertida y conmovedora, "Buscando a Nemo" es un clásico de Pixar.',
    fechaPublicacion: new Date('2023-03-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '7',
    idUsuario: '1',
    idTitulo: '4',
    comentario: 'Una epopeya espacial que nos hace reflexionar sobre el futuro de la humanidad.',
    fechaPublicacion: new Date('2023-03-20'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '8',
    idUsuario: '2',
    idTitulo: '4',
    comentario: 'Interstellar es visualmente impresionante y emocionalmente potente.',
    fechaPublicacion: new Date('2023-03-25'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '9',
    idUsuario: '1',
    idTitulo: '5',
    comentario: 'Una película de superhéroes que elevó el género a nuevas alturas. Heath Ledger es increíble como el Joker.',
    fechaPublicacion: new Date('2023-04-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '10',
    idUsuario: '2',
    idTitulo: '5',
    comentario: 'Un thriller intenso que mantiene al espectador al borde de su asiento.',
    fechaPublicacion: new Date('2023-04-15'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '11',
    idUsuario: '1',
    idTitulo: '6',
    comentario: 'Una obra maestra de la animación con un mensaje profundo sobre la conexión humana.',
    fechaPublicacion: new Date('2023-05-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '12',
    idUsuario: '2',
    idTitulo: '6',
    comentario: 'Una experiencia cinematográfica inolvidable, con un mundo visualmente impresionante.',
    fechaPublicacion: new Date('2023-05-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '13',
    idUsuario: '1',
    idTitulo: '7',
    comentario: 'Una historia de amor épica que se queda contigo mucho después de que termines de ver la película.',
    fechaPublicacion: new Date('2023-05-15'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '14',
    idUsuario: '2',
    idTitulo: '7',
    comentario: 'El guion es impresionante y las actuaciones son conmovedoras.',
    fechaPublicacion: new Date('2023-05-20'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '15',
    idUsuario: '1',
    idTitulo: '8',
    comentario: 'Un clásico de aventuras que nunca pasa de moda. Perfecto para los amantes de los dinosaurios.',
    fechaPublicacion: new Date('2023-06-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '16',
    idUsuario: '2',
    idTitulo: '8',
    comentario: 'La mezcla de acción y humor la hace perfecta para toda la familia.',
    fechaPublicacion: new Date('2023-06-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '17',
    idUsuario: '1',
    idTitulo: '1',
    comentario: 'Una trama que me hizo pensar durante días. La dirección es impecable.',
    fechaPublicacion: new Date('2023-01-30'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '18',
    idUsuario: '2',
    idTitulo: '1',
    comentario: 'No puedo creer cómo lograron hacer algo tan único. Un viaje inolvidable.',
    fechaPublicacion: new Date('2023-02-05'),
    calificacion: 5,
    esVisible: 1,
  },

  {
    idResenna: '19',
    idUsuario: '1',
    idTitulo: '2',
    comentario: 'Impactante en muchos niveles. Los efectos son revolucionarios.',
    fechaPublicacion: new Date('2023-02-20'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '20',
    idUsuario: '2',
    idTitulo: '2',
    comentario: 'La filosofía detrás de la historia es realmente fascinante.',
    fechaPublicacion: new Date('2023-02-25'),
    calificacion: 4,
    esVisible: 1,
  },

  {
    idResenna: '21',
    idUsuario: '1',
    idTitulo: '3',
    comentario: 'Una aventura maravillosa que nunca deja de hacerme sonreír.',
    fechaPublicacion: new Date('2023-03-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '22',
    idUsuario: '2',
    idTitulo: '3',
    comentario: 'Perfecta para ver en familia. Las animaciones son hermosas.',
    fechaPublicacion: new Date('2023-03-12'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '23',
    idUsuario: '1',
    idTitulo: '4',
    comentario: 'Una obra maestra que combina ciencia y emoción de manera extraordinaria.',
    fechaPublicacion: new Date('2023-04-01'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '24',
    idUsuario: '2',
    idTitulo: '4',
    comentario: 'Me encanta cómo explora el amor y el sacrificio. ¡Inolvidable!',
    fechaPublicacion: new Date('2023-04-05'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '25',
    idUsuario: '1',
    idTitulo: '5',
    comentario: 'Es simplemente la mejor película de superhéroes que se ha hecho. Ledger es un genio.',
    fechaPublicacion: new Date('2023-04-20'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '26',
    idUsuario: '2',
    idTitulo: '5',
    comentario: 'Un thriller intenso que redefine el género. ¡Imperdible!',
    fechaPublicacion: new Date('2023-04-25'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '27',
    idUsuario: '1',
    idTitulo: '6',
    comentario: 'Visualmente asombroso, una experiencia que trasciende la pantalla.',
    fechaPublicacion: new Date('2023-05-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '28',
    idUsuario: '2',
    idTitulo: '6',
    comentario: 'Una historia conmovedora en un mundo impresionante. ¡Quiero más!',
    fechaPublicacion: new Date('2023-05-12'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '29',
    idUsuario: '1',
    idTitulo: '7',
    comentario: 'Una historia de amor que nunca me canso de ver. Simplemente hermosa.',
    fechaPublicacion: new Date('2023-05-18'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '30',
    idUsuario: '2',
    idTitulo: '7',
    comentario: 'La música y la actuación son inolvidables. ¡Un clásico!',
    fechaPublicacion: new Date('2023-05-22'),
    calificacion: 4,
    esVisible: 1,
  },
  {
    idResenna: '31',
    idUsuario: '1',
    idTitulo: '8',
    comentario: 'Una aventura que cambió el cine para siempre. Los dinosaurios son geniales.',
    fechaPublicacion: new Date('2023-06-10'),
    calificacion: 5,
    esVisible: 1,
  },
  {
    idResenna: '32',
    idUsuario: '2',
    idTitulo: '8',
    comentario: '¡La nostalgia es real! Un clásico que nunca pierde su encanto.',
    fechaPublicacion: new Date('2023-06-12'),
    calificacion: 4,
    esVisible: 1,
  },
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

export const insertRol: string = `INSERT INTO rol (idRol, nombre) VALUES
('0', 'Usuario'),
('1', 'Administrador');`

export const insertTipoTitulo: string = `INSERT INTO tipoTitulo (idTipo, nombre) VALUES
('1', 'Películas'),
('2', 'Series'),
('3', 'Documentales');`

export const insertUsuario: string = `INSERT INTO usuario (idUsuario, nombre, apellido, correo, clave, fechaNacimiento, avatar, telefono, reputacion, id_rol) VALUES
('1', 'Juan', 'Pérez', 'juan.perez@example.com', 'password123', '1990-05-15', 'https://example.com/avatar-juan.jpg', '123456789', 4.5, 0),
('2', 'Juan', 'Gómez', 'juan.gomez@example.com', 'securepassword456', '1985-11-23', 'https://example.com/avatar-ana.jpg', '987654321', 5.0, 1);`

export const insertTitulo: string = `INSERT INTO titulo (idTitulo, idTipoTitulo, nombre, sinopsis, duracion, URLImagen, URLTrailer, fechaEstreno, puntuacion) VALUES
('1', '1', 'Inception', 'Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños compartidos se le da la tarea inversa: plantar una idea en la mente de un CEO.', '148 min', 'https://placehold.co/100x170', 'https://example.com/inception-trailer.mp4', '2010-07-16', 4.8),
('2', '1', 'The Matrix', 'Un hacker aprende la impactante verdad sobre su realidad y su papel en la guerra contra sus controladores.', '136 min', 'https://placehold.co/100x170', 'https://example.com/matrix-trailer.mp4', '1999-03-31', 4.7),
('3', '1', 'Buscando a Nemo', 'Un pez payaso llamado Marlin, junto con una pez cirujano azul llamada Dory, busca a su hijo Nemo que ha sido capturado por unos buzos.', '100 min', 'https://placehold.co/100x170', 'https://example.com/nemo-trailer.mp4', '2003-05-30', 4.5),
('4', '1', 'Interstellar', 'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.', '169 min', 'https://placehold.co/100x170', 'https://example.com/interstellar-trailer.mp4', '2014-11-07', 4.6),
('5', '1', 'The Dark Knight', 'Batman enfrenta al Joker, un villano anárquico que desata el caos en Gotham mientras desafía las creencias del héroe.', '152 min', 'https://placehold.co/100x170', 'https://example.com/dark-knight-trailer.mp4', '2008-07-18', 4.9),
('6', '1', 'Avatar', 'Un ex-marine se adentra en un mundo alienígena y toma partido en la lucha entre los colonizadores humanos y los nativos Na’vi.', '162 min', 'https://placehold.co/100x170', 'https://example.com/avatar-trailer.mp4', '2009-12-18', 4.4),
('7', '1', 'Titanic', 'Una historia de amor entre Jack y Rose a bordo del desafortunado Titanic que se hunde tras chocar con un iceberg.', '195 min', 'https://placehold.co/100x170', 'https://example.com/titanic-trailer.mp4', '1997-12-19', 4.7),
('8', '1', 'Jurassic Park', 'Un grupo de visitantes lucha por sobrevivir en un parque temático donde dinosaurios clonados escapan de sus jaulas.', '127 min', 'https://placehold.co/100x170', 'https://example.com/jurassic-park-trailer.mp4', '1993-06-11', 4.6),
('9', '1', 'Gladiator', 'Un general romano es traicionado y reducido a la esclavitud, buscando venganza contra el emperador que lo traicionó.', '155 min', 'https://placehold.co/100x170', 'https://example.com/gladiator-trailer.mp4', '2000-05-05', 4.8),
('10', '1', 'The Shawshank Redemption', 'Dos hombres en una prisión encuentran amistad y redención mientras intentan sobrevivir en un entorno brutal.', '142 min', 'https://placehold.co/100x170', 'https://example.com/shawshank-trailer.mp4', '1994-09-23', 4.9);`

export const insertResenna = `INSERT INTO resenna (idResenna, idUsuario, idTitulo, comentario, fechaPublicacion, calificacion, esVisible) VALUES
('1', '1', '1', 'Una experiencia visual impresionante que desafía la mente. ¡Me encantó!', '2023-01-15', 5, 1),
('2', '2', '1', 'Inception es una obra maestra del cine moderno. La trama es compleja pero muy satisfactoria.', '2023-01-20', 4, 1),
('3', '1', '2', 'Un clásico que redefine la ciencia ficción. Los efectos especiales son asombrosos.', '2023-02-10', 5, 1),
('4', '2', '2', 'La Matrix sigue siendo relevante hoy en día. La historia y la filosofía son profundas.', '2023-02-15', 4, 1),
('5', '1', '3', 'Una hermosa historia sobre la familia y la amistad. Perfecta para todas las edades.', '2023-03-01', 5, 1),
('6', '2', '3', 'Divertida y conmovedora, "Buscando a Nemo" es un clásico de Pixar.', '2023-03-05', 4, 1),
('7', '1', '4', 'Una epopeya espacial que nos hace reflexionar sobre el futuro de la humanidad.', '2023-03-20', 5, 1),
('8', '2', '4', 'Interstellar es visualmente impresionante y emocionalmente potente.', '2023-03-25', 4, 1),
('9', '1', '5', 'Una película de superhéroes que elevó el género a nuevas alturas. Heath Ledger es increíble como el Joker.', '2023-04-10', 5, 1),
('10', '2', '5', 'Un thriller intenso que mantiene al espectador al borde de su asiento.', '2023-04-15', 4, 1),
('11', '1', '6', 'Una obra maestra de la animación con un mensaje profundo sobre la conexión humana.', '2023-05-01', 5, 1),
('12', '2', '6', 'Una experiencia cinematográfica inolvidable, con un mundo visualmente impresionante.', '2023-05-05', 4, 1),
('13', '1', '7', 'Una historia de amor épica que se queda contigo mucho después de que termines de ver la película.', '2023-05-15', 5, 1),
('14', '2', '7', 'El guion es impresionante y las actuaciones son conmovedoras.', '2023-05-20', 4, 1),
('15', '1', '8', 'Un clásico de aventuras que nunca pasa de moda. Perfecto para los amantes de los dinosaurios.', '2023-06-01', 5, 1),
('16', '2', '8', 'La mezcla de acción y humor la hace perfecta para toda la familia.', '2023-06-05', 4, 1),
('17', '1', '1', 'Una trama que me hizo pensar durante días. La dirección es impecable.', '2023-01-30', 5, 1),
('18', '2', '1', 'No puedo creer cómo lograron hacer algo tan único. Un viaje inolvidable.', '2023-02-05', 5, 1),
('19', '1', '2', 'Impactante en muchos niveles. Los efectos son revolucionarios.', '2023-02-20', 5, 1),
('20', '2', '2', 'La filosofía detrás de la historia es realmente fascinante.', '2023-02-25', 4, 1),
('21', '1', '3', 'Una aventura maravillosa que nunca deja de hacerme sonreír.', '2023-03-10', 5, 1),
('22', '2', '3', 'Perfecta para ver en familia. Las animaciones son hermosas.', '2023-03-12', 4, 1),
('23', '1', '4', 'Una obra maestra que combina ciencia y emoción de manera extraordinaria.', '2023-04-01', 5, 1),
('24', '2', '4', 'Me encanta cómo explora el amor y el sacrificio. ¡Inolvidable!', '2023-04-05', 4, 1),
('25', '1', '5', 'Es simplemente la mejor película de superhéroes que se ha hecho. Ledger es un genio.', '2023-04-20', 5, 1),
('26', '2', '5', 'Un thriller intenso que redefine el género. ¡Imperdible!', '2023-04-25', 5, 1),
('27', '1', '6', 'Visualmente asombroso, una experiencia que trasciende la pantalla.', '2023-05-10', 5, 1),
('28', '2', '6', 'Una historia conmovedora en un mundo impresionante. ¡Quiero más!', '2023-05-12', 4, 1),
('29', '1', '7', 'Una historia de amor que nunca me canso de ver. Simplemente hermosa.', '2023-05-18', 5, 1),
('30', '2', '7', 'La música y la actuación son inolvidables. ¡Un clásico!', '2023-05-22', 4, 1),
('31', '1', '8', 'Una aventura que cambió el cine para siempre. Los dinosaurios son geniales.', '2023-06-10', 5, 1),
('32', '2', '8', '¡La nostalgia es real! Un clásico que nunca pierde su encanto.', '2023-06-12', 4, 1);`

export const insertMarcador = `INSERT INTO marcador (idMarcador, idUsuario, idTitulo, fechaMarcado) VALUES
('1', '1', '1', '2024-10-01'),
('2', '2', '3', '2024-10-02'),
('3', '1', '2', '2024-10-03'),
('4', '2', '4', '2024-10-04'),
('5', '1', '5', '2024-10-05');`

