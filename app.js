const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform =`rotate(${secondsDegrees + 90}deg)`
    console.log(seconds)

    const mins = now.getMinutes();
    const minsDegress = ((mins/ 60) *360) + 90
    minsHand.style.transform = `rotate(${minsDegress}deg)`;

    const hour = now.getHours();
    const hourDegress = ((hour/ 12) *360) + 90
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
}

setInterval(setDate, 1000)