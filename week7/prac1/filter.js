
function filter(){
        while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            {data.filter((datas)=>datas.state=='아기사자').map(x=>{
                const list  = document.createElement('div');
                list.innerHTML = `제 이름은 ${x.name}이고,${x.state}이고,${x.fruit}입니다.`;
                container.appendChild(list);
                console.log(data);
            })}
        })
        .catch(error=>{
        console.log(error);
        })
}