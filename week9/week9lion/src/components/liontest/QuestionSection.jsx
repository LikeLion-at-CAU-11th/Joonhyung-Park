import React, {useState} from 'react'
import styled from 'styled-components'
import { getQuizAll, postQuizResult } from '../../apis/liontest';

let temp = [

]

let answersheet = [
    
]

const list = getQuizAll();
list.then((response)=>{
    temp = response.data.data
    console.log(temp)    
})



const QuestionSection = ({results,content,setContent}) => {
    
    console.log(content)
    const [i, setIndex] = useState(0); // i 값을 상태로 관리
    const [answer, setAnswer] = useState(0); // i 값을 상태로 관리

    const addToAnswerSheet = (id, answer) => {
        answersheet.push({ id, answer });
      };

    const handleClickAnswer = (i) => {
        setAnswer(i)
    }


    const handleClickNext = () => {

        if(answersheet.length===8){
            addToAnswerSheet(i,answer);
            postQuizResult(answersheet)
            .then((response) => {
              const data = response.data; // 결과 데이터
              console.log(data);
              results.current = data; // 결과 데이터를 resultList 배열에 할당
              console.log(results.current);

              // 결과 데이터 처리 로직 추가
            })
            .catch((error) => {
              console.error(error);
              // 에러 처리 로직 추가
            });
          
           
           setContent(3);
        }
        else{
        addToAnswerSheet(i,answer);
        setIndex(i + 1); // i 값을 업데이트
        console.log(answersheet)
        }
    };

  return (
        <DOM>
        
            <Title>{temp[i].title}</Title>
    
        
            <AnswerSection>
                <Answer
                    answer ={answer===0}
                    onClick={()=>handleClickAnswer(0)}
                >
                    {temp[i].answerList[0].content}
                    </Answer>
                <Answer
                    answer ={answer===1}
                    onClick={()=>handleClickAnswer(1)}
                >
                    {temp[i].answerList[1].content}
                </Answer>
                <Answer
                    answer ={answer===2}
                    onClick={()=>handleClickAnswer(2)}
                >
                    {temp[i].answerList[2].content}
                    </Answer>
            </AnswerSection>

            <NextButton onClick={handleClickNext}>다음</NextButton>

        
        </DOM>
    )
}

export default QuestionSection

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;

const DOM = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.answer ? "grey" : "beige")};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;