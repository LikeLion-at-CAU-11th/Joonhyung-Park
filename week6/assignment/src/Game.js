
import Car from "./Car.js"

const Result = document.getElementById("result");
const Winner = document.getElementById("racing-winners");

class Game{

    constructor(cars,count){

        
        this.Cars = [];
        cars.forEach((car)=>{
            let a = new Car(car);
            this.Cars.push(a);    
        });
        console.log(this.Cars);
        this.gameCount = count;
        
        startGame(this.Cars,this.gameCount);

    }

}

function startGame(Cars,count){
    var max = 0;
    for(let i = 0; i<count; i++){
        Cars.forEach((car)=>{
                car.updateScore();
            
                if(max<car.score){
                    max = car.score;
                }
        });

        gameTempView(Cars);

    }

    gameWinnerView(Cars,max);

}

function gameTempView(Cars){

    Cars.forEach((car)=>{
        const newDiv = document.createElement('div');
        const newText = document.createTextNode(car.name + ' : '+ '-'.repeat(car.score));        
        newDiv.appendChild(newText);
        console.log(newDiv);
        Result.appendChild(newDiv);
    });

    const newBr = document.createElement('br');
    Result.appendChild(newBr)


}

function gameWinnerView(Cars,max) {
    var Result = [];
    Cars.forEach((car)=>{
    
        if(max==car.score){
            Result.push(car.name);
            console.log(Result);
        }
    });

    Winner.innerText = Result.join(", ");
    console.log(Result)
}


export default Game;
