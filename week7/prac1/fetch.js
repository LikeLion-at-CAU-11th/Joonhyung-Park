const url= "./data/data.json";
const container = document.getElementById('container')


function fetchData(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            
            console.log(response);
            
            {
                response.map(data=>{
                    const list  = document.createElement('div');
                    list.innerHTML = `제 이름은 ${data.name}이고,${data.state}이고,${data.fruit}입니다.`;
                    container.appendChild(list);
                    console.log(data);
                })
            }



        })
        .catch(error=>{
        console.log(error);
        })
}

