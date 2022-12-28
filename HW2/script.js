// 1) Які існують типи даних у Javascript?
// number, string, boolean, undefined, biginit, null, object, symbol
// 2) У чому різниця між == і ===?
//"==" - оператор порівнює на рівність (приводить до одного типу).
// "===" - оператор порівнює на ідентичність (типи кожної величини перед порівнянням не змінюються).
// 3) Що таке оператор?
//Завдяки оператору встановлюється значення, яке береться із правого операнда. Основним оператором привласнення є "=",
//він надає значення правого операнда, операнду, що знаходиться ліворуч.

let userName = prompt("Enter your name:");
while (!isNaN(Number(userName))) {
  userName = prompt("Enter your name again:");
}
let userAge = +prompt("Enter your age:");
while (!userAge) {
  userAge = +prompt("Enter your age again:");
}
if (userAge < 18) {
  alert("You are not allowed to visit this website!");
} else if (userAge >= 18 && userAge <= 22) {
  if (confirm("Are you sure you want to continue?")) {
    alert(`Welcome, ${userName}`);
  } else {
    alert("You are not allowed to visit this website!");
  }
} else {
  alert(`Welcome, ${userName}`);
}
