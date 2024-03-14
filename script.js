const body = document.querySelector("body");
const headerToggle = document.getElementById("theme-toggler");

const categoryField = document.querySelector(".inputs__category");
const nameField = document.querySelector(".inputs__name");
const amountField = document.querySelector(".inputs__amount");
const dateField = document.querySelector(".inputs__date");
const timeField = document.querySelector(".inputs__time");
const transactionsList = document.querySelector(".transactions__list");
const addBtn = document.querySelector(".inputs__add-btn");

headerToggle.addEventListener("click", () => {
    body.classList.toggle("app--isDark");
});

const getFromStorage = function (key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
}

const saveToStorage = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const renderTransactions = (transactionsArray) => {
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

  return li
};

const addTransaction = () => {

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

    const li = renderTransactions(transactionsArray);

    console.log(renderTransactions(transactionsArray));

    console.log(li);

    transactionsList.innerHTML = li;
}

addBtn.addEventListener("click", addTransaction);

/*
    [x] Theme toggle
    [ ] Add expenses
    [ ] Save to local storage
    [ ] Get from local storage
    [ ] Edit expenses and save to storage
    [ ] Delete expenses and save to storage




                <li class="transactions__item">
              <div class="transactions__type">
                <div class="transactions__category">Bills</div>
                <p class="transactions__name">Rental</p>
              </div>
              <div class="transactions__details">
                <div class="transactions__amount transactions__amount-savings">
                  $40.38
                </div>
                <div class="transactions__time-wrapper">
                  <div class="transactions__date">3/11</div>
                  <div class="transactions__time">4:33</div>
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
            </li>
*/