
class Rule{

    constructor(){
        this.carlist = [];
        this.range = 0;
        console.log("1");
    }

    set Carlist(cars){

        carlist = cars.value.includes(',');
        
        carlist.forEaxh((car)=>{
            if(5>car>0){
                console.log("true");          
            }
            else{
                console.log("error");
            }
        })

    }

    set Range(gameNum){
        range = gameNum;
        console.log(range);

    }


}

export default Rule;
