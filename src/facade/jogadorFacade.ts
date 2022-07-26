import { Jogador } from "../subsystem/jogador";
import { JogadorAvatar } from "../subsystem/jogador-avatar";
import { JogadorSaves } from "../subsystem/jogador-saves";
import { JogadorEnvioEmail } from "../subsystem/jogador-envio-email";
import { JogadorHistoricoAcesso } from "../subsystem/jogador-historico-acesso";
import { JogadorService } from "../subsystem/jogador-service";

export namespace Facade {
  export class JogadorFacade {
    static removeConta(jogador: Jogador) {
      const jogadorAvatar = new JogadorAvatar(jogador);
      const jogadorSaves = new JogadorSaves(jogador);
      const jogadorHistoricoAcesso = new JogadorHistoricoAcesso(jogador);
      const jogadorService = new JogadorService(jogador); // banco de dados
      const jogadorEmail = new JogadorEnvioEmail(jogador);

      jogadorAvatar.remove();
      jogadorSaves.delete();
      jogadorHistoricoAcesso.remove();
      jogadorService.delete();
      jogadorEmail.envioRemocaoConta();
    }
  }
}