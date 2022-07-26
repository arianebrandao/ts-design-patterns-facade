import { Jogador } from "../models/jogador";
import { JogadorAvatar } from "../models/jogador-avatar";
import { JogadorSaves } from "../models/jogador-saves";
import { JogadorEmail } from "../models/jogador-email";
import { JogadorHistoricoAcesso } from "../models/jogador-historico-acesso";
import { JogadorService } from "../models/jogador-service";

export namespace Facade {
  export class JogadorFacade {
    static removeConta(jogador: Jogador) {
      const jogadorAvatar = new JogadorAvatar(jogador);
      const jogadorSaves = new JogadorSaves(jogador);
      const jogadorHistoricoAcesso = new JogadorHistoricoAcesso(jogador);
      const jogadorService = new JogadorService(jogador); // banco de dados
      const jogadorEmail = new JogadorEmail(jogador);

      jogadorAvatar.remove();
      jogadorSaves.delete();
      jogadorHistoricoAcesso.remove();
      jogadorService.delete();
      jogadorEmail.envioRemocaoConta();
    }
  }
}