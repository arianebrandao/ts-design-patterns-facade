import { Jogador } from "../subsystem/jogador";
import { JogadorAvatar } from "../subsystem/jogador-avatar";
import { JogadorSaves } from "../subsystem/jogador-saves";
import { JogadorEnvioEmail } from "../subsystem/jogador-envio-email";
import { JogadorHistoricoAcesso } from "../subsystem/jogador-historico-acesso";
import { JogadorDatabase } from "../subsystem/jogador-database";

export namespace Facade {
  export class JogadorFacade {
    static removerConta(jogador: Jogador) {
      const jogadorAvatar = new JogadorAvatar(jogador);
      const jogadorSaves = new JogadorSaves(jogador);
      const jogadorHistoricoAcesso = new JogadorHistoricoAcesso(jogador);
      const jogadorDatabase = new JogadorDatabase(jogador); // banco de dados
      const jogadorEmail = new JogadorEnvioEmail(jogador);

      jogadorAvatar.remove();
      jogadorSaves.delete();
      jogadorHistoricoAcesso.remove();
      jogadorDatabase.delete();
      jogadorEmail.envioRemocaoConta();
    }
  }
}