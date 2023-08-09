const $userList = document.querySelector('#user-list');

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.responseType = 'json';
request.send();

function loadEvent() {
  console.log('status of http request:', request.status);
  console.log('response of http request:', request.response);

  for (let i = 0; i < request.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = request.response[i].name;
    $userList.appendChild($li);
  }
}
request.addEventListener('load', loadEvent);
