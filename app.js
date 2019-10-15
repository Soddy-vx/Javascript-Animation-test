const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');
const slider = document.querySelector('.slider');
const bargur = document.querySelector('.hum-nav');
const headline = document.querySelector('.headline');

 const tl = new TimelineMax({delay:.5});

tl.fromTo(hero,1,{height:"0%"},{height:"80%",ease:Power2.easeInOut})
  .fromTo(
  	hero,
  	1.2,
  	{width:"100%"},
  	{width:"80%",ease:Power2.easeInOut})
  .fromTo(
  	slider,
  	1.2,
  	{x:"-100%"},
  	{x:"0%",ease:Power2.easeInOut},"-=1.2")
  .fromTo(
  	headline,
  	1.2,
  	{opacity:0},
  	{opacity:1,ease:Power2.easeInOut});
  ;



const title = document.querySelector('.title');
const icon  = document.querySelector('.icon');
const btn   = document.querySelector('.btn');
const back  = document.querySelector('.half-back');
const description = document.querySelector('.description');


tl.fromTo(title,1.2,{width:"0%",opacity:0}, {width:"100%",opacity:1})
  .fromTo(
  	back,
  	1.5,
  	{x:"100%",opacity:0},
  	{x:"0%",opacity:1,ease:Power3.easeInOut},
  	)
  .fromTo(
  	description,
  	1.5,
  	{opacity:0,y:"-100%",top:"0%",left:"30%"},
  	{opacity:1,y:"0%",top:"50%"}
  	)
  .fromTo(
  	icon,
  	0.7,
  	{y:"300%",opacity:0},
  	{y:"40%",opacity:1,ease:Power1.easeInOut},
  	)
  ;
  


