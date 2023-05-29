import React from 'react'
import styled from 'styled-components'

const Result = (results) => {

    console.log(results);
    console.log(results.results);

    return (
    <Dom>

        <Total>{results.results.result}/8</Total>

        <Incorrect>틀린 문제</Incorrect>


        <Question>

            {
                results.results.incorrect.map((c, i) => (
                    <div key={i}>
                    <Title>{c.title}</Title>
                    <Answer>{c.answer}</Answer>
                    </div>
                ))
            }

        </Question>
    </Dom>
    )
}

export default Result

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;