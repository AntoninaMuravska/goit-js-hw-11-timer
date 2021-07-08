import refs from './refs.js';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    if (time > 0) {
      refs.daysRef.textContent = days;
      refs.hoursRef.textContent = hours;
      refs.minsRef.textContent = mins;
      refs.secsRef.textContent = secs;
    } else {
      clearInterval(this.intervalId);
    }
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  timer() {
    const currentDate = Date.now();
    const deltaTime = this.targetDate - currentDate;

    this.getTimeComponents(deltaTime);
  }

  start() {
    this.timer();
    this.intervalId = setInterval(() => {
      this.timer();
    }, 1000);
  }
}

const myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 10, 2021'),
});

myTimer.start();
