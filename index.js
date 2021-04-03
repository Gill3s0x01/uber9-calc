function formatCurrency(number) {
  return number.toFixed(2).replace(".", ",");
}

function calc() {
  distancekm = inputDistance.value;
  timemin = inputTime.value;
  valueRun = 2 + distancekm * 1.4 + timemin * 0.26;
  buttonCalc.innerHTML = "Total: R$" + formatCurrency(valueRun);
}
