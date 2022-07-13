import ComponentsDom from "../controller/homepage.controller.js";
import ModalUserMenu from "../controller/modal-user-menu.controller.js";
import ModalEditHabit from "../controller/modal-edit-habit.controller.js";
import ModalEditProfile from "../controller/modal-edit-profile.controller.js";
import ModalCreateHabit from "../controller/modal-create-habit.controller.js";
import ModalDeleteHabit from "../controller/modal-delete-habit.controller.js";

console.log()
ComponentsDom.header1();
ComponentsDom.userInfo();
await ComponentsDom.main();
ModalCreateHabit.render();
ModalUserMenu.render();
ModalEditHabit.render();
ModalDeleteHabit.render();
ModalEditProfile.render

// await ComponentsDom.habitRequest()




// testes

import EditProfile from "../controller/api-edit-profile.controller.js"
let img = {
    usr_image: "https://sm.ign.com/ign_br/screenshot/default/1f356a16-4821-4e31-9578-189d51793065-mandalorian-babyyoda-si_w98z.jpg"
}

EditProfile.update(img)


