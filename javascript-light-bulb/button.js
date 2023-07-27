let numberOfClicks = 0;

const $clickButton = document.querySelector('.click-button');
const $container = document.querySelector('.container');

$clickButton.addEventListener('click', function () {
  numberOfClicks++;
  if (numberOfClicks % 2 === 0) {
    $clickButton.classList.add('active');
    $container.classList.add('active');
  } else {
    $clickButton.classList.remove('active');
    $container.classList.remove('active');
  }
});
