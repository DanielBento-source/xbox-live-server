import { Perfis } from "@prisma/client";

export class Usuario {
  id?: string;

  Name: string;

  Email: string;

  Password: string;

  CPF: number;

  isAdmin: boolean;

  Perfis?: string[];
}
