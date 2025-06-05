function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  const expression = display.value;

  try {
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById('historyList');
  const li = document.createElement('li');
  li.textContent = entry;
  li.onclick = () => {
    const eq = entry.split(" = ")[0];
    document.getElementById('display').value = eq;
  };
  historyList.prepend(li); // newest on top
}
