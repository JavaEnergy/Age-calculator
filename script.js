document.getElementById("calculate").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const birthDate = new Date(year, month - 1, day);
  const age = calculateAge(birthDate);
  displayAge(age);
  validetaDate();
  required();
});

function calculateAge(birthDate) {
  const today = new Date();

  let age = {};
  let yearDiff = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  let dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    yearDiff--;
    monthDiff += 12;
  }

  age.years = yearDiff;
  age.months = monthDiff;
  age.days = dayDiff < 0 ? dayDiff + 30 : dayDiff;

  return age;
}

function displayAge(age) {
  document.querySelector(".result h1:nth-child(1) span").textContent =
    age.years;
  document.querySelector(".result h1:nth-child(2) span").textContent =
    age.months;
  document.querySelector(".result h1:nth-child(3) span").textContent = age.days;
}

function validetaDate() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const errorMessage = document.querySelector(".invalid");
  const errorText = document.querySelector(".date");
  const input = document.querySelectorAll(".input-container input");

  if (
    day.valueOf() > 31 ||
    day.valueOf() < 1 ||
    month.valueOf() > 12 ||
    month.valueOf() < 1 ||
    year.valueOf() > 2023
  ) {
    errorMessage.style.display = "flex";
    errorText.style.color = "#FF5959";
    input.forEach((input) => {
      input.style.borderColor = "#FF5959";
    });
  } else {
    errorMessage.style.display = "none";
    errorText.style.color = "#716f6f";
    input.forEach((input) => {
      input.style.borderColor = "#ccc";
    });
  }
}

function required() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const input = document.querySelectorAll(".input-container input");
  const errorText = document.querySelector(".date");

  const errorEmty = document.querySelector(".emty");
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    errorEmty.style.display = "flex";
    input.forEach((input) => {
      input.style.borderColor = "#FF5959";
    });
    errorText.style.color = "#FF5959";
  } else {
    errorEmty.style.display = "none";
    input.forEach((input) => {
      input.style.borderColor = "#ccc";
    });
    errorText.style.color = "#716f6f";
  }
}
