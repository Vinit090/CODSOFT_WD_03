const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.id === 'clear') {
      expression = '';
      display.textContent = '0';
    } else if (button.id === 'equals') {
      try {
        // Evaluate the expression (be careful using eval in real apps)
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString(); // allow chaining
      } catch {
        display.textContent = 'Error';
        expression = '';
      }
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
