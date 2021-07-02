var headerTwo = document.getElementById("stepTwo");
var btnTwo = headerTwo.getElementsByClassName("navtwo");
for (var i = 0; i < btnTwo.length; i++) {
  btnTwo[i].addEventListener("click", function () {
    var currentTwo = document.getElementsByClassName("activated");
    currentTwo[0].className = currentTwo[0].className.replace(" activated", "");
    this.className += " activated";
  });
}
