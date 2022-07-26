import { Jogador } from "../subsystem/jogador";

export class JogadorSaves {
  constructor(private jogador: Jogador) {}

  delete(): boolean {
    console.log(
      "Progresso de jogos de " + this.jogador.nome + " deletados com sucesso!",
    );
    return true;
  }
}
