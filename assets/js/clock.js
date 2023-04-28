'use strict';

const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');

const myClock = function(){
const x = new Date();
const hour = x.getHours()<12?x.getHours()*30:(x.getHours()-12)*30;
const minute = x.getMinutes()*6;
const second = x.getSeconds()*6;

hours.style.transform=`rotate(${hour}deg)`;
minutes.style.transform=`rotate(${minute}deg)`;
seconds.style.transform=`rotate(${second}deg)`;
}

myClock();
setInterval(myClock,1000);
