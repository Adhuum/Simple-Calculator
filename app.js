document.addEventListener("DOMContentLoaded", function (_event) {
  const calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", (e) => {
    const expression = document.getElementById("expression").value;
    let result;
    
    try {
      result = eval(expression);
    } catch (error) {
      result = "Invalid expression";
    }
    
    document.getElementById("result").textContent = "Result: " + result;
  });
});

function appendOperator(operator) {
  const expressionField = document.getElementById("expression");
  expressionField.value += operator;
}
