
class Car{
    constructor(name){
        this.name = name;
        this.score = 0;
    }

    updateScore(){
        const random = Math.floor(Math.random()*10);
        if(random>=4){
            this.score += 1;
            console.log(this.score);
        }
    }
}

export default Car;
