var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var form = document.getElementById("PercentageOfXY");

form.addEventListener("submit", function (event) {
  if (!num1.value || !num2.value) {
    alert("Please Enter a value");
  } else {
    var x = parseFloat(num1.value);
    var y = parseFloat(num2.value);

    var FinalResult = x / y;
    var percent = FinalResult * 100;
    result.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }
});
