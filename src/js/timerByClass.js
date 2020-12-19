import refs from './refs.js';



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
    }
 
    count(time) {
       const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
       const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
       const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
       const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        if (time > 0) {
           refs.daysRef.textContent = days;
           refs.hoursRef.textContent = hours;
           refs.minsRef.textContent = mins;
           refs.secsRef.textContent = secs;
       } else clearInterval(this.intervalId);
    }

    timer() {
        let currentDate = Date.now();
        const deltaTime = this.targetDate - currentDate;
        this.count(deltaTime);
    }
   
    start() {
        this.timer();
        this.intervalId = setInterval(() => {
            this.timer();
    }, 1000)
    }

    pad(value) {
     return String(value).padStart(2, '0');
  }

}

const myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});

myTimer.start();