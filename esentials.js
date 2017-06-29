var fullName = 'Luis Miguel';
function setName(name) {
    fullName = name;
}
setName('Jorge');
console.log(fullName);
var Person = (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('Hola: ' + this.name);
    };
    Person.prototype.addAge = function (add) {
        this.age = this.age + add;
        console.log('Mi nombe es: ', this.name + ' y mi edad nueva es: ' + this.age);
    };
    return Person;
}());
var person;
person = new Person();
person.name = 'Luis';
person.age = 23;
person.addAge(5);
// person.greet(); 
