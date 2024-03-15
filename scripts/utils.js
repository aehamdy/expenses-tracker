import { amountField, categoryField, dateField, getDeleteBtns, getEditBtns, getTransactionsAmount, getTransactionsDate, getTransactionsName, getTransactionsTime, headerToggle, nameField, timeField, transactionsList } from "./elements.js";

export const getFromStorage = function (key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
};

export const saveToStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

const displayTransactions = (list) => {
    transactionsList.innerHTML = list;
};

export const addTransaction = () => {

    const catValue = categoryField.value;
    const nameValue = nameField.value.trim().slice(0, 1).toUpperCase() + nameField.value.trim().slice(1).toLowerCase();
    const dateValue = dateField.value.trim();
    const timeValue = timeField.value.trim()

    let categoryType, amountValue;
    
    if (catValue === "Income") {
        categoryType = "transactions__amount-income"
        amountValue = `+$${amountField.value.trim()}`
    } else if (catValue === "Savings") {
        categoryType ="transactions__amount-savings"
        amountValue = `$${amountField.value.trim()}`
    } else {
        categoryType = "transactions__amount-expenses"
        amountValue = `-$${amountField.value.trim()}`
    };

    const transaction = {
        category: catValue,
        name: nameValue,
        amount: amountValue,
        date: dateValue,
        time: timeValue,
        catType: categoryType,
    }

    const transactionsArray = getFromStorage("exp-trans") || [];

    transactionsArray.unshift(transaction);
    
    saveToStorage("exp-trans", transactionsArray);

    renderTransactions(transactionsArray);

    getEditBtns().forEach((btn, index) => {
        btn.addEventListener("click", e => editTransaction(e, index))});

};

export const edit = (e, index, el) => {

    e.target.style.border = "1px dashed blue";
    e.target.contentEditable = true;

    e.target.addEventListener("blur", () => {
        e.target.style.border = "none";
        const newValue = e.target.textContent.trim();
        const data = getFromStorage("exp-trans");

        if (e.target.classList.contains("transactions__amount")) {
            data[index].amount = newValue;
        } else if (e.target.classList.contains("transactions__name")) {
            data[index].name = newValue;
        } else if (e.target.classList.contains("transactions__date")) {
            data[index].date = newValue;
        } else if (e.target.classList.contains("transactions__time")) {
            data[index].time = newValue;
        }

        saveToStorage("exp-trans", data);
        renderTransactions(data);
        e.target.style.border = "none";
        editAll();
    })
};

export const editAll = () => {
    getTransactionsName().forEach((item, index) => {
        item.addEventListener("click", e => edit(e, index));
      });
      getTransactionsAmount().forEach((item, index) => {
        item.addEventListener("click", e => edit(e, index));
      });
      getTransactionsDate().forEach((item, index) => {
        item.addEventListener("click", e => edit(e, index));
      });
      getTransactionsTime().forEach((item, index) => {
        item.addEventListener("click", e => edit(e, index));
      });
}

export const renderTransactions = (transactionsArray) => {
    let li = "";
  
    transactionsArray.forEach(item => {
  
     li += `<li class="transactions__item">
        <div class="transactions__type">
          <div class="transactions__category">${item.category}</div>
          <p class="transactions__name">${item.name}</p>
        </div>
        <div class="transactions__details">
          <div class="transactions__amount ${item.catType}">
            ${item.amount}
          </div>
          <div class="transactions__time-wrapper">
            <div class="transactions__date">${item.date}</div>
            <div class="transactions__time">${item.time}</div>
          </div>
        </div>
        <div class="transactions__actions">
          <button class="transactions__edit">
            <svg
              class="transactions__edit-icon w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
              />
            </svg>
          </button>
          <button class="transactions__delete">
            <svg
              class="transactions__delete-icon w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
          </button>
        </div>
      </li>`;
    })

    displayTransactions(li);
};

export const checkTheme = () => {
    getFromStorage("exp-isDark") && headerToggle.click();
};

export const initOnStart = () => {

    const data = getFromStorage("exp-trans");

    renderTransactions(data);
};

export const attachDeleteBtnListeners = () => {
    getDeleteBtns().forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            deleteTransaction(e, index);
        });
    });
};

const deleteTransaction = (e, index) => {

    const data = getFromStorage("exp-trans");
    data.splice(index, 1);
    saveToStorage("exp-trans", data);
    renderTransactions(data);
    attachDeleteBtnListeners();
};