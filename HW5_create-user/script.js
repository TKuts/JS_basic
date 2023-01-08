// 1. Опишіть своїми словами, що таке метод об'єкту
// Це якість об'єкта, що предається в якості ункції.
// 2. Який тип даних може мати значення властивості об'єкта?
// string, number, boolean, null, object
// 3. Об'єкт це посилальний тип даних. Що означає це поняття?
// Якщо перезаписати в іншу змінну об'єкт і в новій змінній редагувати.
// Ці ж зміни будуть відображені і в першуму об'єктц. Так як він не перезаписується, а тільки ссилається на об'єкт.

const createNewUser = () => {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let newUser = {
    firstName,
    lastName,
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
  };
  return console.log(newUser.getLogin());
};
createNewUser();

// Если будет возможность, подскажите, пожалуйста, что тут не так.

// const createNewUser = () => {
//   let firstName = prompt("Enter your first name:");
//   let lastName = prompt("Enter your last name:");
//   let newUser = {
//     _firstName: {
//       value: firstName,
//       writeble: false,
//       // enumerable: true,
//     },
//     _lastName: {
//       value: lastName,
//       writeble: false,
//       enumerable: true,
//     },
//     setFirstName(value) {
//       Object.defineProperty(this, _firstName, {
//         writable: true,
//       }),
//         (firstName = value);
//     },
//     setLastName(value) {
//       Object.defineProperty(this, _lastName, {
//         writable: true,
//       }),
//         (lastName = value);
//     },
//     getLogin() {
//       return (this._firstName[0] + this._lastName).toLowerCase();
//     },
//   };
//   return console.log(newUser.getLogin());
// };
// createNewUser();
