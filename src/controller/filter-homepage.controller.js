import GetAllRequest from '../controller/api-get-all.controller.js';
import ComponentsDom from '../controller/homepage.controller.js';
import User from '../models/user.models.js';
export let arrHabitFilter = await GetAllRequest.getAll()
export default class Filter {
    static allFilter() {
        const todos = arrHabitFilter;
        ComponentsDom.main(todos);
    }
    static habitFilterFinish() {
        const habit = arrHabitFilter.filter((habit) => {
            return habit.habit_status === true;
        });
        return ComponentsDom.main(habit);
    }

} 