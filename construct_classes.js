//Использование конструкторов и классов
var Car;
Car = function(model){
    this.model = model;
    return this;
};

Car.prototype.talk = function(){
    console.log("model: " + this.model);
};

car = new Car("volvo");
console.log(car.model);
car.talk();

console.log(Car.prototype.constructor);
console.log("принадлежит ли объект car классу Car:", car instanceof Car);


