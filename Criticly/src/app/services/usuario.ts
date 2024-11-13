export interface Usuario {
  idUsuario?: string;
  nombre?: string;
  apellido?: string;
  correo?: string;
  clave?: string;
  fechaNacimiento?: Date;
  avatar?: Blob;
  telefono?: string;
  reputacion?: number;
  id_rol?: number | string;
}
