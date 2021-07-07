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
const head = document.querySelector('.main-navigation');
head.addEventListener('keydown', (event) =>{
event.target.style.background = "red";
event.target.style.padding = '10%';
event.stopDefault();
});
const nav = document.querySelector('.nav');
nav.addEventListener('keydown',(event)=>{
event.target.style.borderWidth = '5px'
event.target.style.borderStyle = 'double'
event.target.style.borderColor = '#21252';
event.stopPropagation();
});

//% Event 7 & 8 copy & aux click
const para = document.querySelectorAll('p');
para.forEach((big)=>{
  big.addEventListener('copy',(event)=>{
    event.target.style.color = '#fff';
    event.target.style.background = '#17A2B8';
  });
});

const para1 = document.querySelectorAll('p');
para.forEach((big)=>{
  big.addEventListener('auxclick',(event)=>{
    event.target.style.color = '#000';
    event.target.style.background = '#FFF';
  });
});

//! Event 9 
const bg = document.querySelector('*');
window.addEventListener('resize', () => {
bg.style.background = 'plum';
});

window.addEventListener('load',()=>{
 alert('Welcome to the Fun Bus Page! Events include: MouseOver & MouseLeave Picture Scale, Click on H tags to change color/bgColor, DblClick on Buttons result in an Ouch Alert, Wheel Scroll Content Hides On mouseUp content returns, keydown adds border to navigation links, stop Propagation leads to them not turning red as well, on copy text p it will change color you can auxclick with mouse to return it to original, on resize the background turns plum and Finally, on load this message you are reading. :P ');
})
