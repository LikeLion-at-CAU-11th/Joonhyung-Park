import axios from "axios";
import { refresh } from "./refresh";


export const getMypage = async() => {
    const controller = new AbortController();
    const token = localStorage.getItem('access');

    try{
        const result =  await axios.get('http://front.cau-likelion.org/mypage',{
            headers: {
                Authorization : token,
            },
            }
        )
        
        return result;
    } catch (error){
    
        if(error.response.status===401){
            
            const result= await refresh();

            if(result===null){
                // controller.abort();
                alert("토큰이 만료 되어 로그아웃 됩니다.");
                window.location.replace("/");
            
            }
            else{

                const {accessToken,refreshToken} = result;
                //아니 근데 만약에 error의 형태로 되면, 위치를 바꾸더라도 여기는 돌아가는거 아님 ? 그럼 어차피 오류 나는거 아닌가?
                error.config.headers.Authorization = accessToken;

                localStorage.setItem('access',accessToken);
                localStorage.setItem('refresh',refreshToken);

                return (await axios.get(error.config.url, error.config));
            }
        }
    }

}