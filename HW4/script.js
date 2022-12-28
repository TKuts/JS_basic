// 1. Описати своїми словами навіщо потрібні функції у програмуванні.
// Потрібні, щоб не повторювати один і той самий код в декількох місцях (не робити багато строк коду).
// Достатньо один раз написати функцію і потім її тільки викликати, де вона потрібна.
// 2. Описати своїми словами, навіщо у функцію передавати аргумент.
// Для того, щоб ці данні приймались функцією і використовувались в тілі цієї ж функції.
// 3. Що таке оператор return та як він працює всередині функції?
// Як тільки виконання функції доходить до "return", вона зупиняється і повертає результат записаний в коді.

let culc = () => {
  let firstNumber = Number(prompt("Enter your first number:"));
  while (!Boolean(firstNumber) || isNaN(firstNumber)) {
    firstNumber = prompt("Please, enter your first number:");
  }
  let secondNumber = Number(prompt("Enter your second number:"));
  while (!Boolean(secondNumber) || isNaN(secondNumber)) {
    secondNumber = prompt("Please, enter your second number:");
  }
  let mathematicalOperation = prompt(
    "Enter your mathematical operation (+, -, *, /):"
  );
  while (
    mathematicalOperation !== "+" &&
    mathematicalOperation !== "-" &&
    mathematicalOperation !== "*" &&
    mathematicalOperation !== "/"
  ) {
    mathematicalOperation = prompt(
      "Please, enter your mathematical operation (+, -, *, /):"
    );
  }
  let result = null;
  switch (mathematicalOperation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
  }
  console.log(result);
};
culc();
