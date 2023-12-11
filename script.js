document.getElementById("calculate").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const birthDate = new Date(year, month - 1, day);
  const age = calculateAge(birthDate);
  displayAge(age);
  validetaDate();
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

  const errorDay = document.getElementById("errorDay");

  if (day.value > 31 || day.value < 1) {
    errorDay.style.display = "block";
  }
}
