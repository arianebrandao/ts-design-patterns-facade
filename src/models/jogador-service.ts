import { Jogador } from "../models/jogador";

export class JogadorService {
  constructor(private jogador: Jogador) { }

  delete(): boolean {
    console.log(this.jogador.nome + " removido do banco de dados com sucesso!");
    return true;
  }
}
