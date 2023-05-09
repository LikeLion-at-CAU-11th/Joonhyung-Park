const container = document.getElementById('container')
const random = Math.floor(Math.random() * 100 + 1);
const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=10&pageNo=${random}&MobileOS=ETC&MobileApp=pp&arrange=A&_type=json&serviceKey=bpL1zwMxHl6sdZAkF%2FvhasslykH2u7eyi%2FNm4iYkH19UKA4r6aenE5Tn1Ebv0diD5FSiVSQlnZCaq60cfOQeIg%3D%3D`


async function getData(){
    
    const fetchData = await fetch(url);
    console.log(fetchData)
    
    const toJson = await fetchData.json();
    console.log(toJson)

    let details = [];
    
    const data = await toJson.response.body.items.item;
    console.log(data)

    data.map((datas,i)=>{
        const link  = document.createElement('div');
        link.id = 'list';

        const img = document.createElement('img');
        img.src=datas.galWebImageUrl
        console.log(img.src);

        const text = document.createElement('span');
        text.innerHTML = `
        ${(i+1)}번째 사진 
        제목 : ${datas.galTitle}
        장소 : ${datas.galPhotographyLocation}
        `
        //상세보기 페이지로 넘어가서 더보기 진행 

        const button = document.createElement('button');
        button.innerText = '더보기';

        const Time = datas.galCreatedtime;        
        const keyword = datas.galSearchKeyword;
        const Photographer = datas.galPhotographer;
        
        const Info = {
            time: Time,
            keyword: keyword,
            photographer: Photographer,
        }

        button.addEventListener('click', () => {
            showDetails(Time, keyword, Photographer);
          });

        container.appendChild(link);
        container.appendChild(img);
        container.appendChild(text);
        container.appendChild(button);



    })

    //다른 값들을 받기 위해서는 pageNo에 대해 random 함수로 받으면 됨 

}

async function showDetails(time, keyword, photographer) {
    // 새로운 페이지로 이동하면서 상세 정보를 보여줍니다.
    const url = `Detail.html?time=${time}&keyword=${keyword}&photographer=${photographer}`;
    window.location.href = url;
  }