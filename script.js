function startExperience(){

const music =
document.getElementById("bgMusic");

music.play();

document
.getElementById("letter")
.scrollIntoView({
behavior:"smooth"
});

}

const text =
`Dear Sonali,

One month ago, I found more than a girlfriend.

I found my best friend.

My comfort person.

My safe place.

Thank you for every smile,
every laugh,
every late-night conversation,
and every moment that makes my life brighter.

You are one of the most beautiful chapters of my life,
and I can't wait to write the rest of the story with you.

Happy One Month Anniversary ❤️`;

let i=0;

function typeWriter(){
if(i<text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

typeWriter();

const startDate =
new Date("April 30, 2026 00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(diff/(1000*60*60));

const minutes =
Math.floor(diff/(1000*60));

document.getElementById("timer").innerHTML =
`${days} Days ❤️ <br>
${hours} Hours ❤️ <br>
${minutes} Minutes ❤️`;

}

setInterval(updateTimer,1000);

function showMessage(){

document.getElementById("secret").style.display="block";

for(let i=0;i<50;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize="30px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},3000);
}
}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

heart.style.animationDuration=
Math.random()*3+3+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,300);

for(let i=0;i<100;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}

function openEnvelope(){

document
.getElementById("letter")
.scrollIntoView({
behavior:"smooth"
});

}

function forever(){

document.getElementById("foreverMessage")
.innerHTML=
"Yay! ❤️<br>Let's create countless memories together.";

}

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader")
.style.opacity="0";

setTimeout(()=>{

document.getElementById("loader")
.style.display="none";

},1500);

},3000);

};