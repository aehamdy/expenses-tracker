import { addBtn, body, getDeleteBtns, headerToggle } from "./scripts/elements.js";
import { addTransaction, attachDeleteBtnListeners, checkTheme, initOnStart, saveToStorage } from "./scripts/utils.js";



window.addEventListener("DOMContentLoaded", () => {
  checkTheme();
  initOnStart();

});

headerToggle.addEventListener("click", () => {
  body.classList.toggle("app--isDark");
  saveToStorage("exp-isDark", body.classList.contains("app--isDark"));
});

addBtn.addEventListener("click", addTransaction);


/*
    [x] Theme toggle
    [x] Add expenses
    [x] Save to local storage
    [x] Get from local storage
    [x] Get saved data when app loads
    [x] Get theme on loading app
    [ ] Delete expenses and save to storage
    [ ] Edit expenses and save to storage
    [ ] Show results in overview section
*/