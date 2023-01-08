const createNewUser = () => {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let birthday = new Date(prompt("Enter your date of birth"));

  let newUser = {
    firstName,
    lastName,
    birthday,
    getAge() {
      new Date().getFullYear() - birthday.getFullYear();
    },
    getLogin() {
      return (this.firstName[0] + this.lastName).toLowerCase();
    },
    getPassword() {
      return (
        this.firstName[0].toUpperCase() +
        this.lastName.toLowerCase() +
        this.getAge
      );
    },
  };
  return console.log(newUser.getPassword());
};
createNewUser();
