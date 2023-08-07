const $h1 = document.querySelector('h1');
let countdownValue = $h1.textContent - 1;
const countdownNumber = setInterval(countdown, 1000);

function countdown(count) {
  if (countdownValue > 0) {
    $h1.textContent = countdownValue;
    countdownValue--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownNumber);
  }
}
