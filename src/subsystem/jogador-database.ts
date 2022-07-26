import { Jogador } from "../subsystem/jogador";

export class JogadorDatabase {
  constructor(private jogador: Jogador) { }

  delete(): boolean {
    console.log(this.jogador.nome + " removido do banco de dados com sucesso!");
    return true;
  }
}
