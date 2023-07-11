var temp = 0;

function hello()  {
    alert('Betelgeuse');
}

function toggleImg() {
    document.getElementById("background_img").src = "Betelgeuse_background.png";
    temp = 1;
}

function gotoMusic() {

  if(temp==1){
    window.open('week3_Betelgeouse.html');
  }

}
