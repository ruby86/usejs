var Elevator = {
    
    basic: function(color, speed){
        this.color = color;
        this.speed = speed;
    return this;
    },

    display_message: function(){
        console.log("my color is " + this.color + "\n" + "my speed is " + this.speed);
    }
}
 
var elevator = Object.create(Elevator).basic("red", 10);
elevator.display_message();