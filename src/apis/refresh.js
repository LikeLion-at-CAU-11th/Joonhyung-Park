
import axios from "axios";



export const refresh = async() => {

    
    try{

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

        
        return result.data;
    }catch (error){

        // 이거 왜 안됨 ? = > 찾아보기 
        // useNavigate('/');
        
        return null
        // window.location.replace('/');
        // console.log(error);
    }

}