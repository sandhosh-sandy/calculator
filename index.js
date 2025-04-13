const valueBox = document.getElementById("valuebox");

function display(value) {
  valueBox.value += value;
}

function calculate() {
  try {
    valueBox.value = eval(valueBox.value);
  } catch (error) {
    valueBox.value = "Error";
  }
}

function clearinput() {
  valueBox.value = "";
}

function del() {
  valueBox.value = valueBox.value.slice(0, -1);
}
