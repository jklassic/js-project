let min = 00;
let sec = 00;
let mill = 00;

const minutes = document.querySelectorAll('span')[0]
console.log(minutes);
const seconds = document.querySelectorAll('span')[1]
console.log(seconds);
const milliSeconds= document.querySelectorAll('span')[2];
console.log(milliSeconds);

const start = document.querySelectorAll('.btn')[0]
const stop = document.querySelectorAll('.btn')[1]
console.log(stop)
const reset = document.querySelectorAll('.btn')[2]
console.log(reset)

let time;

start.addEventListener('click', () => {
    time = setInterval(startTime, 10)
})

stop.addEventListener('click', ()=> {
    clearInterval(time);
})

reset.addEventListener('click', () => {
    clearInterval(time);
    mill = '00';
    milliSeconds.innerHTML = mill;
    sec = '00';
    seconds.innerHTML = sec;
    min = '00';
    minutes.innerHTML = min;
})

function startTime () {
    mill++ 
    if(mill <= 9) {
        milliSeconds.innerHTML = '0' + mill;
    }
    else if (mill > 9) {
        milliSeconds.innerHTML = mill;
    }

    if (mill > 99) {
        sec++;
        seconds.innerHTML = '0' + sec;
        mill = 0;
        milliSeconds.innerHTML = '0' + 0;    
    }

    if(sec <= 9) {
        seconds.innerHTML = '0' + sec;
    }
    else if(sec > 9) {
        seconds.innerHTML = sec;
    }

    if(sec >59) {
        min++;
        minutes.innerHTML = '0' + min;
        sec = 0;
        seconds.innerHTML = '0' + 0;
        mill = 0;
        milliSeconds.innerHTML = '0' + 0;
    }
}