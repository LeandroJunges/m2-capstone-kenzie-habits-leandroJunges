import GetAllRequest from "../controller/api-get-all.controller.js";
import ComponentsDom from '../controller/homepage.controller.js';

  export default class User {

    static async getAllHabits() {
        const response = await GetAllRequest.getAll()
        return response
    }

    static filterAllHabits() {
        const button = document.querySelector('.main__filterButtonAll')
        const habitAll = []
        const arrUnique = [...new Set(habitAll)];
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            habitAll.push(allHabits)
            ComponentsDom.main(arrUnique)
            console.log(button)
        });
    }

    static filterFinishHabits() {
        const button = document.querySelector('.main__filterButtonFinish')
        const habit = []
        const arrUnique = [...new Set(habit)];
        button.addEventListener('click', async () => {
            const allHabits = await this.getAllHabits()
            const filteredHabits = allHabits.filter(({ habit_status }) => habit_status == true)
            habit.push(filteredHabits)
            console.log(habit)
            
            ComponentsDom.main(arrUnique)
        });
        return button
    }
}

