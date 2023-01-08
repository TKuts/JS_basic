// 1) Опишіть своїми словами що таке Document Object Model (DOM)
//Інтерфейс для HTML документів. Забеспечує виглад "дерева документа". Та має доступ до зміни стиля та структури самого документа.
// 2) Яка різниця між властивостями HTML-елементів innerHTML та innerText?
// innerHTML повертає всі дочірні елементи разом з текстовим змістом.  innerText повертає тільки текстовий склад дочірніх елементів.
// 3) Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
// Звертатись можна за допомогою синтаксесу: (кращий спосіб querySelector - можна ввожити будь який селектор + повертає перший зустрічний елемент)
// getElementById
// getElementsByClassName
// getElementsByName
// getElementsByTagName
// querySelector
// querySelectorAll

// //1)
// const paragraph = document.getElementsByTagName(`p`);
// for (const color of paragraph) {
//   color.style.cssText = `
// 	background-color: #ff0000;
// 	`;
// }
// //2)
// const optionList = document.getElementById("optionsList");
// console.log(optionList);
// // Знайти батьківський елемент та вивести в консоль.
// const parentElement = optionList.closest("div");
// console.log(parentElement);
// // Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.
// const childNodes = optionList.childNodes;
// childNodes.forEach((node) => {
//   console.log(node.nodeName);
//   console.log(node.nodeType);
// });

// // 3)
// let testParagraph = document.querySelector("#testParagraph");
// testParagraph.textContent = "This is a paragraph";
//4-5)
let mainHeader = document.getElementsByClassName("main-header");
let child = undefined;
let newClass = undefined;
for (let iterator of mainHeader) {
  child = iterator.children;
  console.log(child);
}

// // 6)
// const sectionTittle = document.querySelector(".section-title");
// sectionTittle.remove();
