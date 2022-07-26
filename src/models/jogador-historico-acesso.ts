import { Jogador } from "../models/jogador";

export class JogadorHistoricoAcesso {
  constructor(private jogador: Jogador) {}

  public remove(): boolean {
    console.log(
      "Histórico de acesso de " + this.jogador.nome + " removido com sucesso!",
    );
    return true;
  }
}
