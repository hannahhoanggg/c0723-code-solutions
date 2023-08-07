// Locating elements (any html tags ex: div, button, span)
const $popupContainer = document.querySelector('.popup-container');
const $openButton = document.querySelector('.open-button');
const $buttonClose = document.querySelector('.button-close');

// Adding event listener to element (waiting for an event & firing an action)
$openButton.addEventListener('click', openModal);
$buttonClose.addEventListener('click', closedModal);

// Actions to perform
function openModal(event) {
  $popupContainer.className = 'popup-container';
}
function closedModal(event) {
  $popupContainer.className = 'popup-container hidden';
}
