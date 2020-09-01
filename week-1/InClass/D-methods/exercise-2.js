/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) {
        return this.currentAddress = newAddress;
    },
    celebrateBirthday: function () {
        return this.age = this.age + 1;
    }
};

console.log(person);
console.log(`La nueva dirección es: ${ person.changeAddress("London") }`);
console.log(`Y hoy cumple ${ person.celebrateBirthday() } años`);
