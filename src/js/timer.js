import refs from './refs.js';

let day = `Jan 01 2021`;

function setTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };

}

function myTimer(date) {
 
    let targetDate = new Date(date);
    let currentDate = Date.now();
    let timeBetween = targetDate - currentDate;
    let myDate = setTime(timeBetween);
 
    refs.daysRef.textContent = myDate.days;
    refs.hoursRef.textContent = myDate.hours;
    refs.minsRef.textContent = myDate.mins;
    refs.secsRef.textContent = myDate.secs;

   }

 let interval = setInterval(() => {
        myTimer(day);
    }, 1000)