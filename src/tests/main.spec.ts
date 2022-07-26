import { describe, it, expect, vi } from "vitest";
import { Jogador } from "../subsystem/jogador";
import { Facade } from "../facade/jogadorFacade";

const ariane = new Jogador(
  "Ariane Brandão",
  "arianebrandao",
  "ariane@ghbranding.com.br"
);

const logSpy = vi.spyOn(console, "log");
console.log(Facade.JogadorFacade.removerConta(ariane));

describe("should delete player account and all data", () => {
  it("should remove avatar", () => {
    expect(logSpy).toHaveBeenCalledWith(
      "Avatar de Ariane Brandão removido com sucesso!"
    );
  });

  it("should delete saves from games", () => {
    expect(logSpy).toHaveBeenCalledWith(
      "Progresso de jogos de Ariane Brandão deletados com sucesso!"
    );
  });

  it("should delete account history", () => {
    expect(logSpy).toHaveBeenCalledWith(
      "Histórico de acesso de Ariane Brandão removido com sucesso!"
    );
  });

  it("should delete account from database", () => {
    expect(logSpy).toHaveBeenCalledWith(
      "Ariane Brandão removido do banco de dados com sucesso!"
    );
  });
});

describe("should send email to user", () => {
  it("should send email to notice about account deleted", () => {
    expect(logSpy).toHaveBeenCalledWith(
      "Envio do email de remoção de conta de Ariane Brandão"
    );
  });
});
