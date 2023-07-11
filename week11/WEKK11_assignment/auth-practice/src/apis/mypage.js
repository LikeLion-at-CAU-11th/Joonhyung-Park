import axios from "axios";
import getNewRefresh from "./refresh";

export const getMypage = async () => {

    try{
        const token = localStorage.getItem('access');
        const result =  await axios.get('http:/.front.cau-likelion.org/',{
            headers: {
                Authorization : token,
            },
            }
        )
        return result;
    }catch(error){
        if(error.resopnse.status===401){
            
            const result = await getNewRefresh();
            //에러가 난 헤더의 요청에 대입함
            error.config.headers.Authorization = result.accesToken;
            return (await axios.get(error.config.url,error.config)).data;

        }
    }



};