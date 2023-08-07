const $h1 = document.querySelector('h1');

function myGreeting() {
  $h1.textContent = 'Hello There';
}

setTimeout(myGreeting, 2000);
