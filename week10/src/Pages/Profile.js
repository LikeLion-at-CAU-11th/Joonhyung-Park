import React from 'react'
import {useParams} from "react-router-dom"


const data = {
    naye: {
        name: '나예',
        description: '책 수집가'
    },
    moonbear: {
        name: '달곰',
        description: '왕 크니까 왕 귀엽다'
    },
};

const Profile = () => {
    const params=useParams();
    const profile = data[params.username];

    return (
        <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile
