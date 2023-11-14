var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greetfromclass = function () {
        return (this.name + "hello from inside the call function");
    };
    return Person;
}());
function greet(person) {
    return ("heello " + person.name);
}
function classgreet(person) {
    return ("heello from class" + person.name);
}
var personObj = new Person("hareKrsna", 123);
console.log(classgreet(personObj));
// console.log(greet({name:"hareKrsna",age:23}))
console.log(personObj.greetfromclass());
