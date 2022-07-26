import { Jogador } from "../models/jogador";

export class JogadorEmail {
  constructor(private jogador: Jogador) {}

  envioRemocaoConta(): boolean {
    console.log("Envio do email de remoção de conta de " + this.jogador.nome);
    return true;
  }
}
