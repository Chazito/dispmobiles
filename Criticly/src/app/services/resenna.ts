export interface Resenna {
  idResenna?: string;
  idUsuario?: string;
  idTitulo?: string;
  titulo?: string;
  comentario?: string;
  fechaPublicacion?: Date;
  calificacion?: number;
  esVisible?: 0 | 1;
  fechaEliminada?: Date;
  motivoEliminacion?: string;
  URLImagen?: string;
}
