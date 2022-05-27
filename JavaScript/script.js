let option;
let feedback;
function one() {
  option = document.getElementById("selected");
  feedback = "1";
}

function two() {
  option = document.getElementById("selected");
  feedback = "2";
}
function three() {
  option = document.getElementById("selected");
  feedback = "3";
}
function four() {
  option = document.getElementById("selected");
  feedback = "4";
}
function five() {
  option = document.getElementById("selected");
  feedback = "5";
}
function submit() {
  //if theres Choosed option then use => this statement
  if (option !== undefined) {
    document.getElementById("card").classList.toggle("hidden");
    document.getElementById("thanking-page").classList.toggle("hidden");
  }
  option.innerHTML = " " + feedback + " ";
}
