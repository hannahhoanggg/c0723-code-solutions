const $taskList = document.querySelector('.task-list');

function taskList(event) {
  console.log('event.target: ', event.target);
  console.log('element tag name: ', event.target.tagName);

  if (event.target.tagName === 'button') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log($taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', taskList);
