// ---------- JavaScript: the logic ----------

// The calculator's "memory" (state)
let current = "0";      // the number being typed
let previous = null;    // the first number, saved when an operator is pressed
let operator = null;    // "+", "-", "*" or "/"
let justCalculated = false;

const currentEl = document.getElementById("current");
const historyEl = document.getElementById("history");
const symbols = { "+": "+", "-": "\u2212", "*": "\u00d7", "/": "\u00f7" };

// Show the current state on the screen
function updateDisplay() {
  currentEl.textContent = current;
  historyEl.textContent = operator ? previous + " " + symbols[operator] : "";
}

// A number or "." button was pressed
function inputNumber(value) {
  if (justCalculated) { current = "0"; justCalculated = false; }
  if (value === "." && current.includes(".")) return;   // only one decimal point
  if (current === "0" && value !== ".") current = value; // avoid leading zeros
  else current += value;
  updateDisplay();
}

// An operator button (+ - × ÷) was pressed
function chooseOperator(op) {
  if (operator && !justCalculated) calculate();  // chain: 2 + 3 + ... works
  previous = current;
  operator = op;
  current = "0";
  justCalculated = false;
  updateDisplay();
}

// Do the maths
function calculate() {
  if (operator === null) return;
  const a = parseFloat(previous);
  const b = parseFloat(current);
  let result;

  if (operator === "+") result = a + b;
  if (operator === "-") result = a - b;
  if (operator === "*") result = a * b;
  if (operator === "/") {
    if (b === 0) {                       // can't divide by zero
      current = "Can't divide by 0";
      previous = null; operator = null; justCalculated = true;
      updateDisplay();
      return;
    }
    result = a / b;
  }

  // round to avoid things like 0.1 + 0.2 = 0.30000000000000004
  current = String(parseFloat(result.toFixed(10)));
  previous = null;
  operator = null;
  justCalculated = true;
  updateDisplay();
}

function clearAll() {
  current = "0"; previous = null; operator = null; justCalculated = false;
  updateDisplay();
}

function deleteLast() {
  if (justCalculated) return;
  current = current.length > 1 ? current.slice(0, -1) : "0";
  updateDisplay();
}

// Connect the buttons to the functions above (one listener for all buttons)
document.querySelector(".keys").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.num !== undefined) inputNumber(btn.dataset.num);
  else if (btn.dataset.op) chooseOperator(btn.dataset.op);
  else if (btn.dataset.action === "equals") calculate();
  else if (btn.dataset.action === "clear") clearAll();
  else if (btn.dataset.action === "delete") deleteLast();
});

// Bonus: keyboard support
document.addEventListener("keydown", (e) => {
  if (/^[0-9.]$/.test(e.key)) inputNumber(e.key);
  else if ("+-*/".includes(e.key)) chooseOperator(e.key);
  else if (e.key === "Enter" || e.key === "=") { e.preventDefault(); calculate(); }
  else if (e.key === "Backspace") deleteLast();
  else if (e.key === "Escape") clearAll();
});

updateDisplay();
