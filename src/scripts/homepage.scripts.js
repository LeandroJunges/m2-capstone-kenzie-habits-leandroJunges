import ComponentsDom from "../controller/homepage.controller.js";
import ModalUserMenu from "../controller/modal-user-menu.controller.js";
import ModalEditHabit from "../controller/modal-edit-habit.controller.js";
import ModalEditProfile from "../controller/modal-edit-profile.controller.js";
import ModalCreateHabit from "../controller/modal-create-habit.controller.js";
import ModalDeleteHabit from "../controller/modal-delete-habit.controller.js";
import GetAllRequest from "../controller/api-get-all.controller.js"
import Filter from "../controller/filter-homepage.controller.js";
import User from "../models/user.models.js"

ComponentsDom.header1();
ComponentsDom.userInfo();
ComponentsDom.main();
ModalCreateHabit.render();
ModalUserMenu.render();
ModalEditHabit.render();
// ModalDeleteHabit.render();
// User.clickFilterAll();
User.allPages()
User.finished()

// await ComponentsDom.habitRequest()