import React, {useState,useRef}  from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import QuestionSection from './QuestionSection';
import Result from './Result';

const LiontestModal = () => {

  const [content, setContent] = useState(1)
  const results = useRef(null); // useRef를 사용하여 results를 관리
  
  const [searchParams, setSearchParams] = useSearchParams();

  const handleStartBtn = () =>{
  
    setContent(2)
    searchParams.set('problem',1);
    setSearchParams(searchParams);

  }

  const handleEndBtn = () =>{
    console.log(results.current);
    setContent(4)

  }

  return (
    <Dom>
      <Outlet/>
      <Title>멋사인 테스트</Title>
      <ContentBox>
        {content === 1 && <Button onClick={handleStartBtn}>시작하기</Button>}
        {content === 2 && <QuestionSection results={results} content={2} setContent={setContent} setSearchParams={setSearchParams} searchParams={searchParams}/>}
        {content ===3 && <Button onClick={handleEndBtn}>결과보기</Button>}
        {content === 4 && <Result results={results.current} />}

      </ContentBox>
    </Dom>
  )
}

export default LiontestModal

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;