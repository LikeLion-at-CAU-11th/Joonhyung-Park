const container = document.getElementById('container');

const searchParams = new URLSearchParams(window.location.search);

const Time = searchParams.get('time');
const keyword = searchParams.get('keyword');
const Photographer = searchParams.get('photographer');

const text = document.createElement('span');
text.innerHTML = `
    시간 : ${Time.slice(0,4)}/${Time.slice(4,6)}/${Time.slice(6,8)}<br><br>
    키워드 : ${keyword}<br><br>
    촬영자 : ${Photographer}
`;
container.appendChild(text);