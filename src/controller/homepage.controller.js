import GetAllRequest from "./api-get-all.controller.js";
import UpdateHabit from "./api-uptade-habit.controller.js";
import LoginRequest from "./login.controller.js";

export default class ComponentsDom {

  static base_url = 'https://habits-kenzie.herokuapp.com/api/habits'
  static token = localStorage.getItem('@habits-kenzie:usr_token')

  static async header1() {
    const headerUserInfo = document.querySelector('.header__userInfo')
    const figure = document.createElement('figure')
    const headerImg = document.createElement('img')

    const img = localStorage.getItem('@habits-kenzie:usr_image')

    headerImg.className = 'header__avatarUser'
    headerImg.alt = 'Avatar User'
    headerImg.src = JSON.parse(img)
    console.log(img)
    figure.appendChild(headerImg)
    headerUserInfo.appendChild(figure)
  }

  static userInfo() {
    // renderiza o header2 e mostra a imagem que está arquivada no localStorage
    // a imagem deve term um "escutador" para que, ao ser clicada, possa abrir o modal "menu do usuário"
    const sectionUserInfo = document.querySelector('.userinfo')
    const figure = document.createElement('figure')
    const imgUserInfo = document.createElement('img')
    const userName = document.createElement('h2')
    const dropDown = document.querySelector('.dropDown')
    const logoutButton = document.querySelector('.dropDown__Logout')

    logoutButton.addEventListener('click', () => {
      localStorage.clear()
      window.location.href = '../../index.html'
    })

    imgUserInfo.className = 'userinfo__Avatar'
    userName.className = 'userinfo__userName'
    // imgUserInfo.alt = 'Avatar User'
    const nome = localStorage.getItem('@habits-kenzie:usr_name')
    const img = localStorage.getItem('@habits-kenzie:usr_image')

    userName.innerText = `${JSON.parse(localStorage.getItem('@habits-kenzie:usr_name'))}`
    imgUserInfo.src = `${JSON.parse(img)}`

    imgUserInfo.addEventListener('click', (event) => {
      if(dropDown.style.display === 'none'){
        dropDown.style.display = 'flex'
      } else{
        dropDown.style.display = 'none'
      }
    })

    figure.appendChild(imgUserInfo)
    sectionUserInfo.append(figure, userName)
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
    const habits = await GetAllRequest.getAll()
    const cardHabits = document.querySelector('.main__data')
    console.log(habits)

    const habt = [
      {
        "habit_id": 10,
        "habit_title": "bater ponto corretamente",
        "habit_description": "bater ponto todos os dias nos horários corretos",
        "habit_category": "trabalho",
        "habit_status": false
      },
      {
        "habit_id": 11,
        "habit_title": "Estudar 4 horas por dia",
        "habit_description": "focar nos estudos durante no mínimo 4 horas por dia",
        "habit_category": "trabalho",
        "habit_status": false
      },
      {
        "habit_id": 12,
        "habit_title": "Jogar vôlei aos domingos",
        "habit_description": "Jogar vôlei todo domingo",
        "habit_category": "lazer",
        "habit_status": false
      }
    ]

    habits.forEach(element => {
      const card = document.createElement('li')
      const check = document.createElement('div')
      const title = document.createElement('p')
      const description = document.createElement('p')
      const category = document.createElement('p')
      const edit = document.createElement('img')

      check.className = 'main__dataCheck'
      title.className = 'main__dataTitle'
      description.className = 'main__dataDescription'
      category.className = 'main__dataCategory'
      edit.className = 'main__dataEdit'

      title.innerText = `${element.habit_title}`
      description.innerText = `${element.habit_description}`
      category.innerText = `${element.habit_category}`
      edit.src = "../assets/img/Group 39.png"

      card.append(check, title, description, category, edit)
      cardHabits.appendChild(card)
    });
  }
}
