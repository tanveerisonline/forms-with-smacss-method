let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500);
});

// =====================================================================\\

let cloneText = document.querySelector(".clone-text");
cloneText.querySelector("button").addEventListener("click", function () {
  let input = cloneText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  cloneText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    cloneText.classList.remove("active");
  }, 2500);
});
// =========================================================================\\

var Alert = new CustomAlert();
function CustomAlert() {
  this.render = function () {
    //Show Modal
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.style.display = "block";
  };
}
// ===============================================================================\\

var headerOne = document.getElementById("stepOne");
var btnOne = headerOne.getElementsByClassName("navone");
for (var i = 0; i < btnOne.length; i++) {
  btnOne[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
