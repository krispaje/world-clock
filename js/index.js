function everySecond() {
  let london = document.querySelector("#londonCity");
  let londonDate = london.querySelector(".date");
  londonDate.innerHTML = moment().format("MMMM Do YYYY");

  let londonTime = london.querySelector(".time");
  londonTime.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let losAngeles = document.querySelector("#losAngelesCity");
  let losAngelesDate = losAngeles.querySelector(".date");
  losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");

  let losAngelesTime = losAngeles.querySelector(".time");
  losAngelesTime.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
}

setInterval(everySecond, 1000);
