import { Jogador } from "./subsystem/jogador";
import { Facade } from "./facade/jogadorFacade";

const ariane = new Jogador(
  "Ariane Brandão",
  "arianebrandao",
  "ariane@ghbranding.com.br",
);

Facade.JogadorFacade.removerConta(ariane);
//Facade.ClienteFacade.removeConta(fulano);
//Facade.ClienteFacade.removeConta(ciclano);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Facade Design Pattern</h1>
    <p class="read-the-docs">
      <a target="_blank" href="https://whimsical.com/dojo-design-patterns-9wemkvGv94PdBtNvshDB9i">Link para apresentação</a>
    </p>
  </div>
`




