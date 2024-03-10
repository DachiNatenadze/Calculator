const display = document.getElementById("Display");

function appendToDisplay(input) {
  display.value += input;
}
function ClearDisplay() {
  display.value = "";
}

function CalculateInfo() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
