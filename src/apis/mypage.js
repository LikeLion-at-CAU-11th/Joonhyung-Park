import axios from "axios";
import { refresh } from "./refresh";


export const getMypage = async() => {
    const token = localStorage.getItem('access');

    try{
        const result =  await axios.get('http://front.cau-likelion.org/mypage',{
            headers: {
                Authorization : token,
            },
            }
        )


        // const {accessToken, refreshToken}= await refresh();
        // console.log(accessToken);
        // console.log(refreshToken);

        // localStorage.setItem('access',accessToken);
        // localStorage.setItem('refresh',refreshToken);
        
        return result;
    } catch (error){
    
        if(error.response.status===401){
            const {accessToken, refreshToken}= await refresh();


            error.config.headers.Authorization = accessToken;

            localStorage.setItem('access',accessToken);
            localStorage.setItem('refresh',refreshToken);

            return (await axios.get(error.config.url, error.config));
        }
    }


}
