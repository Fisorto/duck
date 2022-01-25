
Duck.prototype.move = function() {
    this.x += Math.floor(Math.random() * 6) * posOrNeg();
    this.y += Math.floor(Math.random() * 6) * posOrNeg();
}

Duck.prototype.danger = function() {
    this.x += -20;
    this.y += -20;
}

Duck.prototype.loud = function() {
    console.log(`The ${this.name} says: ${this.voice}`);
}

//Создатель массива уток
const tooManyDucks = [];
for(let i = 0; i < 100; i++){
    tooManyDucks[i] = randomDuck(duckNumber, duckType, duckColor, canFly, voice);  
}


const lake = document.getElementById("lake")
let ctx = lake.getContext("2d");

//Озеро
function theLake(){
    ctx.lineWidth = 3;
    ctx.fillStyle = "#4AF0E8";
    ctx.beginPath();
    ctx.arc(350, 350, 250, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

    let duckInLake = [];
    let index = 0;
    let hunt = false

    //let check = 0;
    //let onecheck = 0;
    //let twocheck = 0;
    theLake();
    function spawnDuck() {
        
         intevalID = setInterval(function () {

            ctx.clearRect(0, 0, 700, 700);
            theLake();
            if (hanterChance() === 2 && hunt === false){
                hunterino();
                hunt = true;  
            }
            if(hanterChance() === 3 && hunt === true){
                ctx.clearRect(625, 625, 50, 50)
                hunt = false;
            }
            if (index < tooManyDucks.length) {
                if(hunt === true && tooManyDucks[index].fly === "no") {
                    tooManyDucks[index].drawDuck();
                    tooManyDucks[index].loud();
                    duckInLake.push(tooManyDucks[index]);
                   // onecheck++;

                } else if (hunt === false) {
                    tooManyDucks[index].drawDuck();
                    tooManyDucks[index].loud();
                    duckInLake.push(tooManyDucks[index]);
                    //twocheck++;

                }
                //check++;    
                
            }
            
            
            for (let i = 0; i < duckInLake.length; i++ ){
                duckInLake[i].drawDuck();
                if(hunt === false);
                    duckInLake[i].move();
                if(hunt === true){
                    if(duckInLake[i].fly === "yes"){
                        duckInLake[i].danger()
                    } else {
                        duckInLake[i].move();
                    }       
                }
                if(hunt === true) {
                    hunterino();
                }
            }

            index++;    
            ctx.strokeRect(0, 0, 700, 700);
            //console.log(`total: ${check}`)
            //console.log(`one ${onecheck}`)
            //console.log(`two ${twocheck}`)
    
        }, 
        100)   
        
    } 
    
    spawnDuck();
    
