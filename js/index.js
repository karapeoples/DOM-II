// Your code goes here


// ! Event 1 & 2 === MouseOver/MouseLeave
const bigImg = document.querySelectorAll('img');
bigImg.forEach(image =>{
image.addEventListener('mouseover', () => {
  image.style.transform='scale(1.2)';
  image.style.transition='all 0.3s';
})
})
bigImg.forEach(image =>{
 image.addEventListener('mouseleave', () =>{
 image.style.transform='scale(1)';
   image.style.transition='all 0.3s';
 })
})
 
// @ Event 3 click

const title1 = document.querySelector('.logo-heading');
const title2 = document.querySelectorAll('.container h2');
const title3 = document.querySelectorAll('.container h4');

title1.addEventListener('click', () => {
  title1.style.color = '#FFF';
  title1.style.background = '#17A2B8';
});
title2.forEach(event =>{
  event.addEventListener('click', ()=> {
  event.style.color = '#FFF';
  event.style.background = '#17A2B8';
  });
});
title3.forEach(event =>{
  event.addEventListener('click', ()=> {
  event.style.color = '#FFF';
  event.style.background = '#17A2B8';
  });
});

const ouch = document.querySelectorAll('.btn');
ouch.forEach(btns =>{
  btns.addEventListener('dblclick', () => {
    alert('Not so Hard, Ouch!');
  });
});

//# Event 4 & 5 wheel & mouseup
const bye = document.querySelector('body');
bye.addEventListener('wheel', ()=>{
  bye.style.opacity = '0';
  bye.style.transition ='all 0.5s'
});
const hi = document.querySelector('body')
hi.addEventListener('mouseup', ()=>{
  hi.style.opacity = '1';
  hi.style.transition ='all 0.5s';
});


//$Event 6 keydown & stop Prop
const nav = document.querySelector('.nav');
nav.addEventListener('keydown',(event)=>{
event.target.style.borderWidth = '5px'
event.target.style.borderStyle = 'double'
event.target.style.borderColor = '#21252';
event.stopPropagation();
});
const head = document.querySelector('header div');
head.addEventListener('keydown', (event) =>{
event.target.style.background = "red";
});

