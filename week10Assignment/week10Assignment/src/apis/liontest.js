import axios from "axios";
export const baseUrl = 'https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api'

export const getQuizAll = () => {
    
    const url = baseUrl+`/liontest/question`;
    return axios.get(url);

}

export const postQuizResult = async (data) => {
    const url = baseUrl + `/liontest/result`;
  
    const requestData = {
      answer: data.map((item,i) => 
        ({ id: i, answer: item })
      ),
    
    };
  
    try {
      console.log(requestData);

      const response = await axios.post(url, requestData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  