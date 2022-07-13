import CreateHabit from "./api-create-habit.controller.js";

export default class ModalEditHabit {

  static filterButtonNew = document.querySelector('.dropDown__Logout');//utilizando botão Logout temporariamente para testes - aguardandno homepage

  
  static head = document.querySelector('head')
  static main = document.querySelector('main')

  static render() {
  
   
  this.filterButtonNew.addEventListener('click', (event) => {
    const link = document.createElement('link')

    this.head.append(link)
    link.rel = 'stylesheet'
    link.href = '../css/modal-edit-habit.css'
    link.type = 'text.css' 

    const modalBackground = document.createElement('div')
    const divModalEditHabit = document.createElement('div')
    const divModalEditHabitHeader = document.createElement('div')
    const modalTitle = document.createElement('h4')
    const closeButton = document.createElement('button')
    const formEditHabit = document.createElement('form')
    const titleLabel = document.createElement('label')
    const titleInput = document.createElement('input')
    const descriptionLabel = document.createElement('label')
    const descriptionInput = document.createElement('input')
    const categoryLabel = document.createElement('label')
    const categorySelect = document.createElement('select')
    const categoryOption = document.createElement('option')
    const categoryOptionLazer = document.createElement('option')
    const categoryOptionTrabalho = document.createElement('option')
    const categoryOptionSaude = document.createElement('option')
    const categoryOptionEstudos = document.createElement('option')
    const categoryOptionCasa = document.createElement('option')
    const divStatus = document.createElement('div')
    const labelStatus = document.createElement('label')
    const inputStatus = document.createElement('input')
    const divButtons = document.createElement('div')
    const insertButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    this.main.append(modalBackground)
    modalBackground.append(divModalEditHabit)
    divModalEditHabit.append(divModalEditHabitHeader)
    divModalEditHabitHeader.append(modalTitle)
    divModalEditHabitHeader.append(closeButton)
    divModalEditHabit.append(formEditHabit)
    formEditHabit.append(titleLabel)
    formEditHabit.append(titleInput)
    formEditHabit.append(descriptionLabel)
    formEditHabit.append(descriptionInput)
    formEditHabit.append(categoryLabel)
    formEditHabit.append(categorySelect)
    categorySelect.append(categoryOption)
    categorySelect.append(categoryOptionLazer)
    categorySelect.append(categoryOptionTrabalho)
    categorySelect.append(categoryOptionSaude)
    categorySelect.append(categoryOptionEstudos)
    categorySelect.append(categoryOptionCasa)
    divStatus.append(labelStatus, inputStatus)
    formEditHabit.append(divStatus)
    divButtons.append(deleteButton, insertButton)
    formEditHabit.append(divButtons)

    modalTitle.innerText = 'Editar hábito'
    closeButton.innerText = 'X'
    titleLabel.innerText = 'Título'
    descriptionLabel.innerText = 'Descrição'
    categoryLabel.innerText = 'Categoria'
    insertButton.innerText = 'Inserir'
    deleteButton.innerText = 'Excluir'
    categoryOption.innerText = 'Selecionar categoria'
    categoryOptionLazer.innerText = 'Lazer'
    categoryOptionTrabalho.innerText = 'Trabalho'
    categoryOptionSaude.innerText = 'Saude'
    categoryOptionCasa.innerText = 'Casa'
    categoryOptionEstudos.innerText = 'Estudos'

    titleInput.placeholder = 'Digitar título'
    descriptionInput.placeholder = 'Digitar descrição'

    labelStatus.innerText = 'Status'
    inputStatus.type = 'checkbox'
    inputStatus.name = 'checked'
    inputStatus.value = 'true'

    titleInput.type = 'text'
    descriptionInput.type = 'text'
    insertButton.type = 'button'
    deleteButton.type = 'button'

    modalBackground.id = 'modalBackground'
    divModalEditHabit.id = 'modalContent'
    divModalEditHabitHeader.id = 'modalHeader'
    formEditHabit.id = 'modalFormCreateHabit'

    modalTitle.classList.add('modalContent__modalHeader--modalTitle')
    closeButton.classList.add('modalContent__modalHeader--closeButton')
    titleLabel.classList.add('modalContent__modalHeader--modalLabel')
    descriptionLabel.classList.add('modalContent__modalFormCreateHabit--modalLabel')
    categoryLabel.classList.add('modalContent__modalFormCreateHabit--modalLabel')
    titleInput.classList.add('modalContent__modalFormCreateHabit--modalInput')
    descriptionInput.classList.add('modalContent__modalFormCreateHabit--modalInput')
    categorySelect.classList.add('modalContent__modalFormCreateHabit--modalInput')
    categoryOption.classList.add('modalContent__modalFormCreateHabit--option')
    divStatus.classList.add('modalContent__modalDivStatus')
    labelStatus.classList.add('modalContent__modalLabelStatus')
    inputStatus.classList.add('modalContent__modalInputStatus')
    divButtons.classList.add('modalContent__modalDivButtons')
    insertButton.classList.add('modalContent__modalFormCreateHabit--insertButton')
    deleteButton.classList.add('modalContent__modalFormCreateHabit--deleteButton')

    insertButton.addEventListener('click', () => {

      CreateHabit.create(titleInput.value, descriptionInput.value, categorySelect.value)
    })

    closeButton.addEventListener('click', () => this.main.removeChild(modalBackground))
    })
  }
}

