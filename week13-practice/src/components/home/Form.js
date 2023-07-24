import React from 'react'
import { useRecoilState } from 'recoil'
import {userNameAtom,emailAtom} from '../../recoil/atoms'

const Form = ({type,inputType}) => {
    const[userName,setUserName] = useRecoilState(userNameAtom);
    const[email, setEmail] = useRecoilState(emailAtom);

    const onChange=(e)=>{
        const data = e.target.value;
        //type에 따른 동기처리
        if(inputType==='이름'){
            setUserName(data);
        }else{
            setEmail(data);
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