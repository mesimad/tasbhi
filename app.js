let add = document.querySelector(".add");
let reset = document.querySelector(".reset");
let counter = document.querySelector(".counter");

add.addEventListener("click", addCounter);
reset.addEventListener("click", resetCounter);

function addCounter() {
  counter_num = counter.innerHTML;
  counter.innerHTML = parseInt(counter_num) + 1;
  x = parseInt(counter_num);

  if (y <= x) {
    alert("WARNING ! Stop Limit Exceeded !");

    counter.innerHTML = "0";
    y = "0";
  }
}
function getOption() {
  var e = document.getElementById("choice");
  var choosen = parseInt(e.options[e.selectedIndex].text);
  y = parseInt(choosen);
}
function resetCounter() {
  counter.innerHTML = 0;
  alert("Reset Successful!");
}
