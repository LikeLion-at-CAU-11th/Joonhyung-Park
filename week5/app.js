
function Circle(radius){

    if(!new.target){
        return new Circle(radius);
    }

	this.radius = radius;
	this.getDiameter = function(){
		return 2 * this.radius;
	}
};

const circle1 = new Circle(5);
// 10
console.log(circle1.getDiameter());

const circle2 = Circle(10);
//20
console.log(circle2.getDiameter());


// class의 경우 html 파일 내에 여러개 존재 가능 => 해당 요소들이 배열의 형태로 저장됨 => 배열의 index를 활용하여, 각각에 요소에 접근할 수 있음 

const myHandText = document.getElementById('my-hand-text');
// 해당 아이디가 없어도 null의 형태로 표시됨 + 동작함
const myHandIcon = document.getElementById("my-hand-icon");


const comHandText = document.getElementById('computer-hand-text');
const comHandIcon = document.getElementById("computer-hand-icon");

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');

const myPointText = document.getElementById('my_score');
const comPointText = document.getElementById('com_score');
// const 자료형 사용시, 연산처리가 안됨 => 왜 ?
let my_point = 0;
let com_point = 0;

const resetBtn = document.getElementById('reset-button');

const modeBtn = document.getElementById('mode-button');
const border = document.querySelectorAll("#content-wrapper,#button,#reset-button");
const btnBack = document.querySelectorAll("#reset-button,#mode-button");
let mode_text = '다크모드';
console.log(border.constructor.name);


const body = document.querySelector('body');

rockBtn.addEventListener('click',displayMyChoice);
scissorsBtn.addEventListener('click',displayMyChoice);
paperBtn.addEventListener('click',displayMyChoice);

resetBtn.addEventListener('click',resetScore);

modeBtn.addEventListener('click',changeMode);

function displayMyChoice(e){

    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;

    console.log(myHandText);
    console.log(myHandIcon);

    myHandText.innerText = clickedBtn;
    //해당 위치에 class 에 접근함 => class의 내용을 받았던 값으로 변경함
    //if 해당 위치가 아닌 다른 위에서 해당 값을 변경하려면 
    // ????
    myHandIcon.className=clickedIcon.className;

    startGame(clickedBtn)

}

function getComChoice(){

    const randval = {
        0:["rock","fa-regular fa-hand-back-fist"],
        1:["sissors","fa-regular fa-hand-scissors fa-rotate-90"],
        2:["paper","fa-regular fa-hand"]
    };

    //floor 의 의미 =  
    const randidx = Math.floor(Math.random()*3);

    return randval[randidx];

}

function displayComChoice(result1,result2){

    comHandText.innerText = result1;
    comHandIcon.className = result2;

}

function resetScore(){

    my_point = 0;
    com_point = 0;
    changeScore();

    result.innerText = 'result';


}

function changeScore(){

    myPointText.innerText = my_point;
    comPointText.innerText = com_point;

}

function changeMode(){
    if(mode_text=='다크모드'){
        mode_text='라이트모드';
        modeBtn.innerText=mode_text;
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
        for (i = 0; i < border.length; i++) {
            const item = border.item(i);
            item.style.borderColor= "white"
        }

        for(i =0; i<btnBack.length;i++){
            const item = btnBack.item(i);
            item.style.color = "black";
            item.style.backgroundColor = "white";
        }


    } else{

        mode_text='다크모드';
        modeBtn.innerText=mode_text;
        body.style.backgroundColor = "white";
        body.style.color = "black";
        
        for (i = 0; i < border.length; i++) {
            const item = border.item(i);
            item.style.borderColor= "black"
        }

        for(i =0; i<btnBack.length;i++){
            const item = btnBack.item(i);
            item.style.color = "white";
            item.style.backgroundColor = "black";
        }

    }
}

function startGame(myChoice){

    const temp = getComChoice()
    
    const comChoiceText = temp[0]
    const comChoiceIcon = temp[1]
    
    console.log(comChoiceText)
    const swi = myChoice[0]+comChoiceText[0]

    console.log(swi)

    displayComChoice(comChoiceText,comChoiceIcon);

    switch(swi){
        
        case "rs":
        case "sp":
        case "pr":
            result.innerText='win';
            my_point = my_point +1;
            console.log(my_point);
            break; 
    
        case "sr":
        case "rp":
        case "ps":
            result.innerText='lose';
            com_point = com_point +1;
            console.log(com_point);
            break;

        default : 
            result.innerText='tie';
            my_point = my_point +1;
            com_point = com_point +1;
        }


    changeScore();



}