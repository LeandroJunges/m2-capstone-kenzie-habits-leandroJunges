import ComponentsDom from "../controller/homepage.controller.js";
import ModalUserMenu from "../controller/modal-user-menu.controller.js";
import ModalEditHabit from "../controller/modal-edit-habit.controller.js";
import ModalEditProfile from "../controller/modal-edit-profile.controller.js";
import ModalCreateHabit from "../controller/modal-create-habit.controller.js";
import ModalDeleteHabit from "../controller/modal-delete-habit.controller.js";
import GetAllRequest from "../controller/api-get-all.controller.js"
import Filter from "../controller/filter-homepage.controller.js";

ComponentsDom.header1();
ComponentsDom.userInfo();
ComponentsDom.main();
ModalCreateHabit.render();
ModalUserMenu.render();
<<<<<<< HEAD
ModalEditHabit.render();
=======
// ModalEditHabit.render();
>>>>>>> 0eb383f1d12d2846bb4236d41a1e087279c384c2
ModalDeleteHabit.render();
Filter.allPages();

await ComponentsDom.habitRequest()