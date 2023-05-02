// Below line takes input as prompt from the user

let startingMinutes = prompt("Enter number of minutes for timer: ");

let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

// The below function updates the timer 

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
}
