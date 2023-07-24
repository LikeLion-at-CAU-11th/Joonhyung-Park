import React from 'react'
import { useRecoilState } from 'recoil'
import {userNameAtom,emailAtom, passwordAtom} from '../../recoil/atoms'

const Form = ({type,inputType}) => {
    const[userName,setUserName] = useRecoilState(userNameAtom);
    const[email, setEmail] = useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);

    const onChange=(e)=>{
        const data = e.target.value;
        //type에 따른 동기처리
        if(inputType==='이름'){
            setUserName(data);
        }else if(inputType==='이메일'){
            setEmail(data);
        }
        else {
            setPassword(data);
        }


    }



    return (
    <>
    <div>{inputType}</div>
    <input type={type} onChange={onChange}></input>
    </>
  )
}

export default Form