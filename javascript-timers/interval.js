let count = 4;
let countdownId = null;
const $countdownDisplay = document.querySelector('.countdown-display');

function countDown() {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countDown, 1000);
