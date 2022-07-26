import { Jogador } from "../models/jogador";

export class JogadorAvatar {
  constructor(private jogador: Jogador) {}

  remove(): boolean {
    console.log("Avatar de " + this.jogador.nome + " removido com sucesso!");
    return true;
  }
}
