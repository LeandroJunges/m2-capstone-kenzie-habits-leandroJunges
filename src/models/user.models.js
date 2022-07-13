import GetAllRequest from "../controller/api-get-all.controller.js";
import Filter from "../controller/filter-homepage.controller.js";
import { arrHabitFilter } from "../controller/filter-homepage.controller.js";
export default class User {
  static async finished() {
    // retorna os hábitos da API filtrando somente os hábitos concluídos
  }

  static async allPages() {

      let habit = []
      const allButton = document.querySelector('.main__filterButtonAll')

      allButton.addEventListener('click', async () => {
        const all = await Filter.allFilter()
        habit = []
        habit.push(all)
        console.log("TESTE")
      })

      const finishButton = document.querySelector('.main__filterButtonFinish')
    finishButton.addEventListener('click', async () => {  
      habit = []
      const complete = await Filter.habitFilterFinish()
      habit.push(complete)
    })
      // console.log(habit)
      return habit
  }
}



