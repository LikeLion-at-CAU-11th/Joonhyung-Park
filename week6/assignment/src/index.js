import Rule from "./Rule.js"


const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");

const carNamesSubmitBtn = document.getElementById("car-names-submit");
const racingCountSubmitBtn = document.getElementById("racing-count-submit");


// 필요 class 
// 게임을 진행시키는 데 필요한 자동차 생성 클래스
// 게임의 룰에 따른 플레이 방식을 결정하는 함수

var setgame = new Rule();



carNamesSubmitBtn.addEventListener('click',(e) =>{
    //클릭된다면, car에서 car list에 해당 값들을 추가후, 해당 값들에 대한 판별을 진행
    e.preventDefault();
    setgame.carlist = inputName.value;
    setgame.Carlistc();

});

racingCountSubmitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(inputCount.value);
    //클릭된다면, car에서 게임 횟수에 대해 저장
    setgame.range = inputCount.value;
    setgame.Range();

});

//만약 두개 모두 정상적으로 진행됬다면, car에서 게임 진행 함수를 실행함
