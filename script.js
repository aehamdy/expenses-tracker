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
    [x] Get saved data when app loads
    [x] Get theme on loading app
    [x] Edit expenses and save to storage
    [x] Clear list functionality
    [ ] Delete expenses and save to storage
    [ ] Search by name/date functionality
    [ ] Show results in overview section
*/