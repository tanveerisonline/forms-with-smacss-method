var headerOne = document.getElementById("stepOne");
var btnOne = headerOne.getElementsByClassName("navone");
for (var i = 0; i < btnOne.length; i++) {
  btnOne[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
