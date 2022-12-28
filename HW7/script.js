// 1. Опишіть своїми словами як працює метод forEach.
// послідовно перебирає всі елементи масиву
// 2. Як очистити масив?
// очистити можна за допомогою delet, але залигається довжина масиву.
// shift - видаляє перший елемент масиву,  pop - видаляє останній елемент масиву.
// splice - змінює і видаляє вміст масиву (краще використовувати його)
// 3. Як можна перевірити, що та чи інша змінна є масивом?
// методом Array.isArray() - якщо об'єкт являється масивом повертає true

let array = ["hello", "world", 23, "23", null];

let filterBy = (array, type) => {
  let newArray = [];
  array.forEach((item) => {
    if (typeof item !== typeof type) {
      newArray.push(item);
    }
  });
  return newArray;
};
console.log(filterBy(array, "string"));
