"use strict";
const date = document.querySelector("#date");
const button = document.querySelector(".button");
const result = document.querySelector("#result");

const dayToBirthday = () => {
  const birthdayDate = date.value;
  if (birthdayDate === "") {
    document.querySelector("#error").style.display = "block";
    document.querySelector("#error").textContent = "Дата рождения не выбрана!";
    result.style.display = "none";
    return;
  } else {
    document.querySelector("#error").style.display = "none";
    result.style.display = "block";
  }
  const currentDay = new Date();
  const birthday = new Date(birthdayDate);
  const utc1 = Date.UTC(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );
  const utc2 = Date.UTC(
    birthday.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  const diffTime = utc2 - utc1;
  const day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let dayWord = "дней";
  let leftWord = "До твоего дня рождения осталось";

  if (day < 0) {
    result.textContent = "Твой день рождения уже прошел!";
    return;
  } else if (day === 0) {
    result.textContent = "Твой день рождения сегодня!";
    return;
  } else if (day % 10 === 1 && day % 100 !== 11) {
    dayWord = "день";
    leftWord = "До твоего дня рождения остался";
  } else if (
    (day % 10 === 2 || day % 10 === 3 || day % 10 === 4) &&
    day % 100 !== 12 &&
    day % 100 !== 13 &&
    day % 100 !== 14
  ) {
    dayWord = "дня";
  }
  result.textContent = `${leftWord} ${day} ${dayWord}!`;
};

button.addEventListener("click", dayToBirthday);
