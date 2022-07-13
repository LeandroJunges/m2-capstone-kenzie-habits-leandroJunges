import EditProfile from "./api-edit-profile.controller.js"

export default class ModalEditProfile {
  static head = document.querySelector("head")
  static body = document.querySelector("body")
  static btnEdit = document.querySelector(".dropDown__editar")

  static teste(){

  }

  static render() {
    // renderiza Modal Editar Perfil
    
   

    this.btnEdit.addEventListener("click", ()=>{
        const link            = document.createElement("link")
        link.rel  = "stylesheet"  
        link.href = "../css/modal-edit-profile.css"
        this.head.appendChild(link)
        const generalContainer = document.createElement("div")
        generalContainer.classList.add("container")
        const form            = document.createElement("form")
        form.classList.add("container__form")
        const divHeader       = document.createElement("div")
        divHeader.classList.add("container__header")
        const h1              = document.createElement("h1")
        h1.innerText=" Editar Perfil"
        const buttonClose     = document.createElement("button")
        buttonClose.id        = "btnClose"
        buttonClose.innerText = "X"
        const divContent      = document.createElement("div" )
        divContent.classList.add("container__content")
        const labelName       = document.createElement("label")
        labelName.for         = "cName"
        labelName.classList.add("container__content--legend")
        labelName.innerText   = "Nome"
        const inputName       = document.createElement("input")
        inputName.type        = "text"
        inputName.id          = "cName"
        inputName.placeholder = "Digite seu novo nome"
        const labelImg        = document.createElement("label")
        labelImg.for          = "cImg"
        labelImg.classList.add("container__content--legend")
        labelImg.innerText    = "URL da imagem"
        const inputImg        = document.createElement("input")
        inputImg.type         = "url"
        inputImg.id           = "cImg"
        inputImg.placeholder  = "Caminho da sua imagem"
        const divButton       = document.createElement("div" )
        divButton.classList.add("container__button")
        const buttonSave      = document.createElement("button")
        buttonSave.id         = "btnsend"
        buttonSave.innerText  = "Salvar Alterações"
        buttonSave.type = "button"
        divButton.appendChild(buttonSave)
        divContent.append(labelName, inputName, labelImg, inputImg)
        divHeader.append(h1, buttonClose)
        form.append(divHeader,divContent,divButton)
        generalContainer.appendChild(form)
        this.body.appendChild(generalContainer)

        buttonClose.addEventListener("click", ()=>{
          this.body.removeChild(generalContainer)
        })
        buttonSave.addEventListener("click", ()=>{
          EditProfile.update()
        })
    })

  }
}
