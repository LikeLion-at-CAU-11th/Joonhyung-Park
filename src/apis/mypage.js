import axios from "axios";


export const getMypage = async() => {

    const token = localStorage.getItem('access');
    const result =  await axios.get('http://front.cau-likelion.org/mypage',{
        headers: {
            Authorization : token,
        },
        }
    )
    return result;



}
