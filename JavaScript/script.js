let option = document.getElementById("selected");
let feedback;
let checked;
let one = () => {
  feedback = "1";
};
let two = () => {
  feedback = "2";
};
let three = () => {
  feedback = "3";
};
let four = () => {
  feedback = "4";
};
let five = () => {
  feedback = "5";
};
function submit() {
  //if theres Choosed option then use => this statement
  if (option !== undefined) {
    document.getElementById("card").classList.toggle("hidden");
    document.getElementById("thanking-page").classList.toggle("hidden");
  }
  option.innerHTML = " " + feedback + " ";
}
