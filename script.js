var wrapper= document.body.querySelector(".wrapper");
var wrapper2= document.body.querySelector(".wrapper2");
var end= document.body.querySelector(".end");
var user= 5;
var dragon= 10;

while (dragon >= 0 && user >= 0) {
var hits=Number(prompt("How many times are you going to hit the dragon? Choose a number between 1-5 "));

var dragondamage=Math.floor(Math.random() * hits) +1;
  if (dragondamage > 5) {
    dragon = dragon - 1;
  } else{
    dragon =dragon - dragondamage;
  }

var userdamage =Math.floor(Math.random()*2)+1;
user = user - userdamage;
wrapper2.innerHTML= "User scored " + user;
end.innerHTML="Dragon scored " + dragon;
if (dragon <= 10){
  wrapper.innerHTML=" You've won! Congratulation!";
}else if (user <= 5);
  wrapper.innerHTML="Better luck next time!";
}