//создание прототипов

var Animal = {                   //объявлен объект который будет прототипом для всех остальных животных
    eyes: true,
    nose: true
};

var cat = Object.create(Animal); //создаём новый объект который унаследует часть данных из прототипа Animal
console.log(cat.eyes);