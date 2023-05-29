import React from 'react'
import styled from 'styled-components';
import { UserCard } from './UserCard';
export const UserDataSection = ({userData}) => {
  return (

    <Dom>
        {
            userData&&userData.map((user,i)=>(
                <UserCard user={user}></UserCard>
            ))
        }
    </Dom>

    )
}


const Dom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  align-content: flex-start;
  padding: 0 20px;
  min-height: 400px;
`;