import { addBtn, arrow, body, headerToggle, inputsViewer, inputsWrapper } from "./scripts/elements.js";
import { addTransaction, checkTheme, initOnStart, saveToStorage, updateOverview } from "./scripts/utils.js";



window.addEventListener("DOMContentLoaded", () => {
  checkTheme();
  initOnStart();
  });

headerToggle.addEventListener("click", () => {
  body.classList.toggle("app--isDark");
  saveToStorage("exp-isDark", body.classList.contains("app--isDark"));
});

window.addEventListener("resize", changeBackgroundcolor);

function changeBackgroundcolor () {
  if (document.documentElement.clientWidth < 380) {
    inputsWrapper.style.bottom = "215px";
  } else if (document.documentElement.clientWidth < 460) {
    inputsWrapper.style.bottom = "175px";
  } else if(document.documentElement.clientWidth <= 465) {
    inputsWrapper.style.bottom = "135px";
  } else if (document.documentElement.clientWidth > 465 && document.documentElement.clientWidth < 600) {
    inputsWrapper.style.bottom = "95px"
  } else if (document.documentElement.clientWidth > 600 && document.documentElement.clientWidth < 654) {
    inputsWrapper.style.bottom = "25px";
  } else if (document.documentElement.clientWidth >= 655 && document.documentElement.clientWidth < 1125) {
    inputsWrapper.style.bottom = "0";
  } else if (document.documentElement.clientWidth > 655 && document.documentElement.clientWidth <= 1200) {
    inputsWrapper.style.bottom = "-25px";
  }
}

inputsViewer.addEventListener("change", () => {
  if (inputsViewer.checked) {
    inputsWrapper.style.cssText = "visibility: visible; opacity: 1;";
    // arrow.style.cssText = "transform: rotate(180deg)";
    changeBackgroundcolor();
  } else {
    inputsWrapper.style.cssText = "bottom: -100%; visibility: hidden; opacity: 0";
    // arrow.style.cssText = "transform: rotate(0)";
    // changeBackgroundcolor();
  }
})

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
    [x] Delete expenses and save to storage
    [x] Search by name/date functionality
    [x] Show results in overview section
    [x] Validation on adding task
*/