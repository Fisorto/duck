
//Крнструктор уток
function Duck (number, name, color, fly, voice) {
    this.number = number;
    this.name = name;
    this.color = color;
    this.fly = fly;
    this.voice = voice;
    //this.loud = console.log(`The ${this.name} says: ${voice}`)
    
    this.x = Math.floor(Math.random() * 350) + 180;
    this.y = Math.floor(Math.random() * 350) + 180;

    this.drawDuck = function() {
        circle(this.x, this.y, this.color)
     }

    /*this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);*/
};

//Создатель уток
function randomDuck(number, name, color, fly, voice){
    let duck = Math.floor(Math.random() * 4);
    for(let i = 0; i < 4; i++)
    if(duck === i){
        return new Duck (number[i], name[i], color[i], fly[i], voice[i])  
    }
}
// Ути
function circle (x,y,color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2, false);
    //ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function hunterino () {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(650, 650, 20, 0, Math.PI*2, false);
    //ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function hanterChance() {
    return Math.floor(Math.random() * 11);
}

//Модуль скорости
function posOrNeg () {
    let j = Math.floor(Math.random() * 2);
    if(j === 0){
        return -1;
    } else if ( j === 1){
        return 1;
    }
    
}
