const images = ["summer.jpg", 
                "fall.jpg", 
                "winter.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//img라는 element 생성
//결과는 <img>
const bgImage = document.createElement("img");

//src 부분에 해당 문구를 설정(이미지가 랜덤으로 불러져와야 하기 때문에 html이 아닌 js에서 처리하기 위함)
//결과는 <img src="img/0/jpeg">
bgImage.src = `img/${chosenImage}`;

//body를 불러옴 body에 html을 추가(아직까진 js에 생성되어 있으므로 여기서 동적으로 html로 삽입하는 역할을 함.)
document.body.appendChild(bgImage);