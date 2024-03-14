import { addBtn, body, headerToggle } from "./scripts/elements.js";
import { addTransaction, checkTheme, initOnStart, saveToStorage } from "./scripts/utils.js";



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
    [ ] Get saved data when app loads
    [ ] Show results in overview section
    [ ] Edit expenses and save to storage
    [ ] Delete expenses and save to storage
*/