import { Usuarios } from "@prisma/client";

export class Perfil {
  id?: string;
  Title: string;
  ImageURL: string;
  UsuariosId?: Usuarios;
}
