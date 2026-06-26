function everySecond() {
  let london = document.querySelector("#londonCity");
  if (london) {
    let londonDate = london.querySelector(".date");
    londonDate.innerHTML = moment().format("MMMM Do YYYY");

    let londonTime = london.querySelector(".time");
    londonTime.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  let losAngeles = document.querySelector("#losAngelesCity");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");

    let losAngelesTime = losAngeles.querySelector(".time");
    losAngelesTime.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}
setInterval(everySecond, 1000);
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city">
          <div class="left-content">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
      
        </div>`;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
