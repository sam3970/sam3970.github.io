/*
const player ={
    name : "mental",
    sayHello: function(otherPersonName){
        console.log("hello!"+ otherPersonName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
*/

/*
const calculator = {
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    times:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    },
    power:function(a,b){
        return a**b;
    },
};

const plusResult = calculator.plus(2, 3);

console.log(plusResult)
*/

//hello는 클래스 이름 h1이라는 것을 꼭 명시해주어야 함.
/*
const h1 = document.querySelector("div.hello:first-child h1");

//아래 2개는 같은 역할을 함
//const title = document.querySelector("#hello");
//const title = document.getElementById("hello");
//All은 모든 중복되는 조건을 가져올 때 사용
//(All이 빠진다면 맨 첫번째 조건만 가져옴)

function handleTitleClick()
{
    const clickdClass = "clicked";

    h1.classList.toggle(clickdClass); //classList를 읽어서 클릭 되었는지 확인하는 방식(toggle)

}

h1.addEventListener("click",handleTitleClick);

*/





const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    //어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수
    event.preventDefault();
    loginForm.classList.add(HIDDNE_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //후자가 변수
    //greeting.innerText = "Hello " + userName;
    paintGreetings(username);  // username을 input으로부터 받음
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//"" 이거 설정해놔서 안됐었음...
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    //()를 추가하는건 function을 즉시 실행한다는 뜻.
    loginForm.addEventListener("submit", onLoginSubmit);
}
else
{
    paintGreetings(savedUsername);  // username을 local Storage로부터 받음
}