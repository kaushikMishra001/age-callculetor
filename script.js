"use strict";
let userInput = document.querySelector(".birthdate");

userInput.max = new Date().toISOString().split("T")[0];

let resultShow = document.querySelector(".resultShow");

document
  .querySelector(".btn")
  .addEventListener("click", function calculateAge() {
    let birthDate = new Date(userInput.value);

    let birthday = birthDate.getDate();
    let birthmonth = birthDate.getMonth() + 1;
    let birthyear = birthDate.getFullYear();

    let corrent = new Date();

    let correntDay = corrent.getDate();
    let correntMonth = corrent.getMonth() + 1;
    let correntyear = corrent.getFullYear();

    let resultDay, resultMonth, resultYear;
    resultYear = correntyear - birthyear;
    console.log(resultYear);

    if (correntDay >= birthday) {
      resultDay = correntDay - birthday;
    } else {
      resultMonth--;
      resultDay = getDasInMonth(birthyear, birthmonth) + correntDay - birthday;
    }
    if (resultMonth < 0) {
      resultMonth = 11;
      y3--;
    }

    function getDasInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    if (correntMonth >= birthmonth) {
      resultMonth = correntMonth - birthmonth;
    } else {
      resultYear--;
      resultMonth = 12 + correntMonth - birthmonth;
    }

    resultShow.innerHTML = `you are <span>${resultYear} </span> year,<span>${resultMonth} </span> month and  <span>${resultDay} </span> days old`;
  });
