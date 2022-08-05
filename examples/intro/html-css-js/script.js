document.addEventListener("DOMContentLoaded", function () {
  var c = document.getElementById("count");

  setInterval(function () {
    c.innerText++
  }, 1000)
})