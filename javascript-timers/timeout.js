function myGreeting() {
  const $h1 = document.querySelector('h1');
  $h1.textContent = 'Hello There';
}

setTimeout(myGreeting, 2000);
