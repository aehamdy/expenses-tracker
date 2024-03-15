export const body = document.querySelector("body");
export const headerToggle = document.getElementById("theme-toggler");

export const categoryField = document.querySelector(".inputs__category");
export const nameField = document.querySelector(".inputs__name");
export const amountField = document.querySelector(".inputs__amount");
export const dateField = document.querySelector(".inputs__date");
export const timeField = document.querySelector(".inputs__time");
export const transactionsList = document.querySelector(".transactions__list");
export const addBtn = document.querySelector(".inputs__add-btn");

export const getDeleteBtns = () => document.querySelectorAll(".transactions__delete");
export const getTransactionsName = () => document.querySelectorAll(".transactions__name")
export const getTransactionsAmount = () => document.querySelectorAll(".transactions__amount")
export const getTransactionsDate = () => document.querySelectorAll(".transactions__date")
export const getTransactionsTime = () => document.querySelectorAll(".transactions__time")
export const getEditBtns = () => document.querySelectorAll(".transactions__edit");