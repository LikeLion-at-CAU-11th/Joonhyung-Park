import React,{useState, useEffect} from 'react'



const ThumbsUp = () =>
 {

    const [name,setName] = useState("");
    const [count,setCount] = useState(0);

    const changeName=(e)=>setName(e.target.value);
    const countUp = () =>setCount(count+1);

    useEffect(()=>{
        console.log("렌더링");
        console.log({count,name});
    },[name]);
    //의존성 배열 
    return (
    <div>
        <p>  이름 : {name}</p>
        <input type={"text"} value={name} onChange={changeName}/>
        <p>0 {count}</p>
        <button onClick={countUp}>굳</button>
    </div>
  )

}

export default ThumbsUp