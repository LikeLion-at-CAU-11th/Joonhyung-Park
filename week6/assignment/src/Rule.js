import Game from "./Game.js"


class Rule{

    constructor(){
        this.carlist = null;
        this.curresult = [];
        this.range = 0;
    }


    Carlist(){

        var cars = this.carlist.split(',');
        let result = cars.some((car)=>{
            if(car.length>5||car==''){
                return 1;
            }
        });

        if(result == 1){
            alert("자동차의 입력이 잘못되었습니다. ");
            this.curresult = [];
        }
        else{
            this.curresult = cars;
            if(this.range>0){
                new Game(this.curresult,this.range);
            }
        }
    
    }

    Range(){
        if(this.range<=0){
            alert("횟수의 입력이 잘못 되었습니다. "); 
            this.range = 0;
        }
        else{
            if(this.curresult.length!=0){
                new Game(this.curresult,this.range);
            }
        }

    }


}

export default Rule;
