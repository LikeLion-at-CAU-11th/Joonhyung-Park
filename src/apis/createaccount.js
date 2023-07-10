import axios from "axios"

export const createaccount = async (id,pw,name,age) => {

    age = Number(age);
    const result = await axios.post('http://front.cau-likelion.org/signup',
    {
        id,
        pw,
        name,
        age
    });
    return result.data


}
