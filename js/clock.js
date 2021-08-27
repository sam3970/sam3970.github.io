const clock = document.querySelector("h2#clock");
//const clock = document.querySelector("clock");
//const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();

  //string 처리를 하려면 String(new Date().getHours()) -> string으로 감싸주면 된다.
  //padStart(자릿수, 자릿수가 0일 때 나타나는 문자)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//호출 후 1초간 지속적으로 호출을 가능하게 하는 로직
getClock()
setInterval(getClock, 1000);