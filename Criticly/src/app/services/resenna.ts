export interface Resenna {
  idResenna?: string;
  idUsuario?: string;
  idTitulo?: string;
  comentario?: string;
  fechaPublicacion?: Date;
  calificacion?: number;
  esVisible?: 0 | 1;
  fechaEliminada?: Date;
  motivoEliminacion?: string;
}
