var People = {
    p_data: function(imja, rost, ves){
        this.imja = imja;
        this.rost = rost;
        this.ves = ves;
        return this;
    },
    talk: function(message){
        console.log(message + ", меня зовут " + this.imja + ", мой рост " + this.rost + ", а вес " + this.ves + " моё особое умение это " + this.skill );
    }
}

var People2 = Object.create(People);
    People2.p_data = function(imja, rost, ves, skill){ // добавлен аргумент skill в прототип People
        People.p_data.apply(this, arguments);
        this.skill = skill;
        return this;
    }

var people2 = Object.create(People2).p_data("Harold", 12, 100, "борьба");
people2.talk("Здарова мужики");


