import GetAllRequest from "./api-get-all.controller.js";
import UpdateHabit from "./api-uptade-habit.controller.js";
import ModalCreateHabit from "./modal-create-habit.controller.js";

export default class ComponentsDom {
  static body = document.querySelector("body");

  static header1() {
    // renderiza o header1 e mostra a imagem que está arquivada no localStorage
  }

  static header2() {
    // renderiza o header2 e mostra a imagem que está arquivada no localStorage
    // a imagem deve term um "escutador" para que, ao ser clicada, possa abrir o modal "menu do usuário"
  }

  static async main() {
    // busca os dados na API chamando GetAllRequest.getAll
    // renderiza os dados no corpo da página de acordo com o Figma
    // botão Criar deve ter escutador para abrir o Modal "Criar Hábito"
    // botão Concluídos deve fitrar apenas os hábitos concluídos - chama classe User
    // botão Todos deve renderizar todos os hábitos
    // OBS: no Mobilie as colunas Descrição e Categoria devem estar com display: none
    // botão Carregar Mais deve renderizar os hábitos de todas as páginas da API
    // botão ... deve ter escutador para abrir o Modal "Editar Hábito"
    // checkbox deve alterar o hábito para concluído. Deve ter um escutador para chamar a classe UpdateHabit.update()
  }
}

ModalCreateHabit.render()
