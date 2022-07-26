import { Jogador } from "../subsystem/jogador";

export class JogadorEnvioEmail {
  constructor(private jogador: Jogador) {}

  envioRemocaoConta(): boolean {
    console.log("Envio do email de remoção de conta de " + this.jogador.nome);
    return true;
  }
}
