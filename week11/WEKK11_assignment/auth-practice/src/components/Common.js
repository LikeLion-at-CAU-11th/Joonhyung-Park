import { styled } from "styled-components/dist/constructors/constructWithOptions";

//전체를 감싸는 블록
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;
//아이디 비번쪽
export const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
`;

//버튼까지
export const Form = styled.div`
  display: flex;
  height: 100%;
`;
//로그인하기
export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  font-size: 20px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  &::placeholder {
    color: darkgray;
    font-size: 20px;
    font-weight: 500;
    font-family: 'OTWelcomeRA';
  }
`;