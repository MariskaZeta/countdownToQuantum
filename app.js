// this is the countdown function 
const countdown = () => {
    // this is the date we are counting down to
    // getTime renders it to the milliseconds
    const countDate = new Date ('April 28, 2023 00:00:00').getTime(); 
    // now we get the current time
    const now = new Date().getTime();
    // now we get the difference
    const gap = countDate - now;

    // how does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // now we will calculate based on the gap how many days, hours, minutes, and seconds 
    const textDay = Math.floor(gap / day); 
    // the hours will be the remainder divided by the num of minutes that can fit evenly and and it rounded using Math.floor
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // update the HTML
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    
};

// calling the countdown function every second
setInterval(countdown, 1000);

