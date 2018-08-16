//создание прототипов

var Animal = {                   //объявлен объект который будет прототипом для всех остальных животных
    constructor: function(name, age, type){
        this.name = name,
        this.age = age;
        this.type = type;
        return this;            //возвращаем имя и возраст
    },
    privetstvie: function(){
        console.log("Привет меня зовут " + this.name + " я " + this.type + " mne " + this.age + " let" + " мой цвет " + this.color);
    }
};

var Cat = Object.create(Animal);
var Dog = Object.create(Animal);

Cat.constructor = function(name, age, type, color){
    Animal.constructor.apply(this, arguments);
        this.color = color;
return this;
}

Dog.constructor = function(name, age, type, color){
    Animal.constructor.apply(this, arguments);
        this.color = color;
return this;
}

var cat = Object.create(Cat).constructor("Messi", 10, "кошка", "красный");
var dog = Object.create(Dog).constructor("Monny", 15, "собачка", "черный");
cat.privetstvie();
dog.privetstvie();