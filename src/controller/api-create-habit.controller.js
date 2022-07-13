export default class CreateHabit {
  static async create(title, description, category) {
    const data = {
      "habit_title": `${title}`,
      "habit_description": `${description}`,
      "habit_category": `${category}`
    }

    await fetch (
        "https://habits-kenzie.herokuapp.com/api/habits",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@habits-kenzie:usr_token"))}`
            },
            body: JSON.stringify(data)
        })
    .then(res => res.json())
    .then(res => {
      if(res.message === "habit_title obrigatório"){
        alert('Título obrigatório')
      }
      if(res.message === "habit_description obrigatório"){
        alert('Descrição obrigatória')
      }
      if(res.message === "categorias aceitas: saude, estudos, casa, trabalho e lazer"){
        alert('Selecionar categoria')
      } else{
        document.location.reload()
        alert('Novo hábito criado!')
      }
    })
    .catch(res => console.log(res))
  }
}
