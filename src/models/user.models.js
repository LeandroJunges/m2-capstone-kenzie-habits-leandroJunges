import GetAllRequest from "../controller/api-get-all.controller.js";
import Filter from "../controller/filter-homepage.controller.js";

export default class User {
  static async finished() {
    // let hab = []
    // const finishButton = document.querySelector('.main__filterButtonFinish')
    // finishButton.addEventListener('click', async () => {
    //   hab = []
    //   const complete = await Filter.habitFilterFinish()
    //   hab.push(complete)
    // })
    // console.log(hab)
  }

    static async allPages() {
      let habit = []
      const allButton = document.querySelector('.main__filterButtonAll')


      allButton.addEventListener('click', async () => {
        const all = await Filter.AllFilter()
        habit = []
        habit.push(all)
      })

      const finishButton = document.querySelector('.main__filterButtonFinish')
    finishButton.addEventListener('click', async () => {
      habit = []
      const complete = await Filter.habitFilterFinish()
      habit.push(complete)
    })
      
      console.log(habit)
      return habit
    }
}
