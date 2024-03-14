import { addBtn, body, headerToggle } from "./scripts/elements.js";
import { addTransaction } from "./scripts/utils.js";



headerToggle.addEventListener("click", () => {
    body.classList.toggle("app--isDark");
});

addBtn.addEventListener("click", addTransaction);

/*
    [x] Theme toggle
    [x] Add expenses
    [x] Save to local storage
    [x] Get from local storage
    [ ] Show results in overview section
    [ ] Edit expenses and save to storage
    [ ] Delete expenses and save to storage
*/