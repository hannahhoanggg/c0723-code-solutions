function handleFocus(event) {
  console.log("The 'focus' event was fired.");
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log("The 'blur' event was fired.");
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':' + event.target.value);
}

const $input1Element = document.querySelector('input[name]');
const $input2Element = document.querySelector('input[name]');
const $textareaElement = document.querySelector('textarea[name]');

$input1Element.addEventListener('focus', handleFocus);
$input1Element.addEventListener('blur', handleBlur);
$input1Element.addEventListener('input', handleInput);

$input2Element.addEventListener('focus', handleFocus);
$input1Element.addEventListener('blur', handleBlur);
$input2Element.addEventListener('input', handleInput);

$textareaElement.addEventListener('focus', handleFocus);
$textareaElement.addEventListener('blur', handleBlur);
$textareaElement.addEventListener('input', handleInput);
