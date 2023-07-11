import axios from "axios";
import { getMypage } from "./mypage";
import { useNavigate } from "react-router-dom";


export const refresh = async() => {

    

        const accessToken=localStorage.getItem('access');
        const refreshToken=localStorage.getItem('refresh');

        const result = await axios.post('http://front.cau-likelion.org/refresh',
        {
            refreshToken
        },
        {
        headers : {
                Authorization : accessToken,
            },
        });

        
        console.log(result.data);
        return result.data;


}