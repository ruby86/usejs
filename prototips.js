//создание прототипов

var Animal = {                   //объявлен объект который будет прототипом для всех остальных животных
    constructor: function(name, age, type){
        this.name = name,
        this.age = age;
        this.type = type;
        return this;            //возвращаем имя и возраст
    },
    privetstvie: function(){
        console.log("Привет меня зовут " + this.name + " я " + this.type + " mne " + this.age + " let");
    }
};

var cat, dog, chicken
cat = Object.create(Animal).constructor("Miaut", 10, "кошка");
dog = Object.create(Animal).constructor("Dars", 30, "собачка");
chicken = Object.create(Animal).constructor("Petro", 5, "циплёнок");

cat.privetstvie();
dog.privetstvie();
chicken.privetstvie();

//проверка: является ли объект Animal прототипом объекта cat ==> true/да
console.log(Animal.isPrototypeOf(cat));