import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { Button } from './common'
import {ThemeContext} from '../../context/Context'

//모든 페이지에서 동일하게 적용할 부분에 경우 ,Layout 컴포넌트에서 함 
import { isSubmittedAtom,userNameAtom,emailAtom } from '../../recoil/atoms'
import { useRecoilValue, useResetRecoilState } from 'recoil'

const Layout = ({children}) => {
    
    const context = useContext(ThemeContext);

    const [mode,setMode] = useState(context.blueTheme)

    const handleClick = (e)=>{

        const color = e.target.value;
        if(color==='blue'){
            setMode(context.blueTheme);
        }
        else if(color==='green'){
            setMode(context.greenTheme);
        }
        else{
            setMode(context.pinkTheme);
        }

    }

    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmited = useRecoilValue(isSubmittedAtom);

    return (

    <ThemeContext.Provider value={mode}>
        <Wrapper>
            <Header mode={mode.main}>
                <Button value='blue' onClick={handleClick}>Blue</Button>
                <Button value='green' onClick={handleClick}>Green</Button>
                <Button value='pink' onClick={handleClick}>Pink</Button>

            </Header>
            <div>{children}</div>
            <Footer mode={mode.main}>
                {
                !isSubmited? '':`${userName}의 공간 || 이메일 주소 ${email}`
                }
            </Footer>
        </Wrapper>
    </ThemeContext.Provider>
    )
}

export default Layout

// styled-components
// src/components/layout/Layout.js


const Wrapper = styled.div`
margin: 0;
padding: 0;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const Header = styled.div`
display: flex;
height: 100px;
width: 100%;
justify-content: center;
align-items: center;
background-color: ${props=>props.mode};
`

const Footer = styled.div`
display: flex;
height: 50px;
width: 100%;
justify-content: center;
align-items: center;
color : white;
background-color: ${props=>props.mode};
`