export interface Usuario {
  idUsuario?: string;
  nombre?: string;
  apellido?: string;
  correo?: string;
  clave?: string;
  fechaNacimiento?: Date;
  avatar?: string;
  telefono?: string;
  reputacion?: number;
  id_rol?: number | string;
}
