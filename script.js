const time = document.querySelector(".time"),
  greeting = document.querySelector(".greeting"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus"),
  mydate = document.querySelector(".day");
name.textContent = "[Enter Name]";
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const er = document.querySelector(".er");
const btn = document.querySelector(".btn");

function showTime() {
  let hour = new Date().getHours(),
    min = new Date().getMinutes(),
    sec = new Date().getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} `;

  if (new Date().getMinutes() == 00 && new Date().getSeconds() == 00) {
    setBgGreet();
  }

  setTimeout(showTime, 1000);
}

function showDay() {
  let myday = new Date().getDate();

  mydate.innerHTML = `${getWeekDay(new Date())}<span>, </span>${addZero(
    myday
  )}<span> </span>${getMonth(new Date())} `;
}

function getWeekDay(date) {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return day[date.getDay()];
}

function getMonth(date) {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return month[date.getMonth()];
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

let setNight = 0;
let setMorning = 0;
let setDay = 0;
let setEvening = 0;

let imagesNight = [];
for (let i = 0; i < 6; i++) {
  imagesNight.push(
    `images/night/${addZero(Math.floor(Math.random() * 20 + 1))}.jpg`
  );
}
let imagesMorning = [];
for (let i = 0; i < 6; i++) {
  imagesMorning.push(
    `images/morning/${addZero(Math.floor(Math.random() * 20 + 1))}.jpg`
  );
}
let imagesDay = [];
for (let i = 0; i < 6; i++) {
  imagesDay.push(
    `images/day/${addZero(Math.floor(Math.random() * 20 + 1))}.jpg`
  );
}
let imagesEvening = [];
for (let i = 0; i < 6; i++) {
  imagesEvening.push(
    `images/evening/${addZero(Math.floor(Math.random() * 20 + 1))}.jpg`
  );
}

let images = [...imagesNight, ...imagesMorning, ...imagesDay, ...imagesEvening];
let hour = new Date().getHours();

function setBgGreet() {
  let hour = new Date().getHours();
  if (6 > hour||hour==24) {
    document.body.style.backgroundImage = `url(${imagesNight[setNight]})`;
    greeting.textContent = "Good Night, ";
    if (setNight < imagesNight.length - 1) {
      setNight++;
    } else {
      setNight = 0;
    }
  } else if (hour >= 6 && 12 > hour) {
    document.body.style.backgroundImage = `url(${imagesMorning[setMorning]})`;
    greeting.textContent = "Good Morning, ";
    if (setMorning < imagesMorning.length - 1) {
      setMorning++;
    } else {
      setMorning = 0;
    }
  } else if (hour >= 12 && 18 > hour) {
    document.body.style.backgroundImage = `url(${imagesDay[setDay]})`;
    greeting.textContent = "Good Afternoon, ";
    if (setDay < imagesDay.length - 1) {
      setDay++;
    } else {
      setDay = 0;
    }
  } else if (hour >= 18) {
    document.body.style.backgroundImage = `url(${imagesEvening[setEvening]})`;
    greeting.textContent = "Good Evening, ";
    if (setEvening < imagesEvening.length - 1) {
      setEvening++;
    } else {
      setEvening = 0;
    }
  }
}

let imgconst = 0;
function changeBg() {
  if (imgconst == 0) {
    let a = document.body.style.backgroundImage;
    let imageDot = a.slice(5, -2);
    imageDotlet = images.indexOf(imageDot);
    imgconst++;
  }

  if (imageDotlet == images.length - 1) {
    imageDotlet = 0;
  } else {
    imageDotlet++;
  }

  const img = document.createElement("img");
  const src = images[imageDotlet];
  img.src = src;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${src})`;
  };
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 1000);
}

function getName() {
  if (
    localStorage.getItem("name") === null ||
    localStorage.getItem("name") == ""
  ) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  let nameMemory = localStorage.getItem("name");

  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
      if (e.target.innerText === null || e.target.innerText == "") {
        name.textContent = nameMemory;
        localStorage.setItem("name", nameMemory);
      }
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
    if (e.target.innerText === null || e.target.innerText == "") {
      name.textContent = nameMemory;
      localStorage.setItem("name", nameMemory);
    }
  }
}
name.onclick = function () {
  this.innerHTML = "";
};

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  let focusMemory = localStorage.getItem("focus");

  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
      if (e.target.innerText === null || e.target.innerText == "") {
        focus.textContent = focusMemory;
        localStorage.setItem("focus", focusMemory);
      }
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
    if (e.target.innerText === null || e.target.innerText == "") {
      focus.textContent = focusMemory;
      localStorage.setItem("focus", focusMemory);
    }
  }
}
focus.onclick = function () {
  this.innerHTML = "";
};

const blockquote = document.querySelector("blockquote");
const figcaption = document.querySelector("figcaption");
const btn__quote = document.querySelector(".btn__quote");
const figure = document.querySelector(".quote");

async function getQuote() {
  figure.classList.remove("anim__show");
  blockquote.classList.remove("anim__show");
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.quoteText.length > 90) {
    setTimeout(1000);
    getQuote();
  } else {
    blockquote.textContent = data.quoteText;
    figcaption.textContent = data.quoteAuthor;
    blockquote.classList.add("anim__show");
    figure.classList.add("anim__show");
  }
}
document.addEventListener("DOMContentLoaded", getQuote);
btn__quote.addEventListener("click", getQuote);

city.onclick = function () {
  this.innerHTML = "";
};

async function getWeather() {
  if ((localStorage.getItem("city")==null) || (localStorage.getItem("city")==undefined)){
    localStorage.setItem("city", "Minsk");
    }
  city.textContent = localStorage.getItem("city");

  let data;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=0e4b2ec141921300b0fdbc326ca779d4&units=metric`;
  const res = await fetch(url);

  if (res.status !== 200) {
    if (res.status == 404) {
      er.textContent = "Не корректный город";
    } else {
      er.textContent = "";
    }
  } else {
    data = await res.json();
    er.textContent = "";
  }

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
  wind.textContent = `Wind ${Math.ceil(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity ${Math.ceil(data.main.humidity)} %`;
  pressure.textContent = `Pressure ${Math.ceil(data.main.pressure)} hPa`;
  weatherDescription.textContent = data.weather[0].description;
}

let cityMemory = localStorage.getItem("city");

function setCity(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText == null || e.target.innerText == "") {
        city.textContent = cityMemory;
        city.blur();
      } else {
        localStorage.setItem("city", e.target.innerText);
        city.blur();
        cityMemory = localStorage.getItem("city");
      }
      getWeather();
    }
  } else {
    localStorage.setItem("city", e.target.innerText);
    if (e.target.innerText === null || e.target.innerText == "") {
      city.textContent = cityMemory;
      localStorage.setItem("city", cityMemory);
    }
    getWeather();
  }
}

city.addEventListener("blur", setCity);
city.addEventListener("keypress", setCity);
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
btn.addEventListener("click", changeBg);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
setTimeout(getWeather, 6000000);

showTime();
showDay();
setBgGreet();
getName();
getFocus();
getWeather();
