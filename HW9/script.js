// 1) Опишіть, як можна створити новий HTML тег на сторінці.
// document.createElement('назва тегу')
// 2) Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
// визначає позицію елемента документа, відносно елемента яктй викликає цей метод.
// 'beforebegin'- до самого element (до відкритого тега).
// 'afterbegin' - відразу після відкриваючого тега (перед першим потомком).
// 'beforeend'- перед закриваючим тегом (після останнього потомка).
// 'afterend' -  після element (після закрываючого тега).
//  3) Як можна видалити елемент зі сторінки?
// element.remove() - посилання на елемент який видаляється , element.removeChild ("елемент який потрідно видалити") - потрібне посилання на "родителя" та на "потомка"

let testArray = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

function displayList(array) {
  let ul = document.createElement("ul");
  let content = array
    .map((element) => {
      return `<li>${element}</li>`;
    })
    .join("");
  ul.innerHTML = content;
  document.body.append(ul);
}
displayList(testArray);
