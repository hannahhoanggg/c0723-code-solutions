const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabContainer);

function tabContainer(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  const $dataView = event.target.getAttribute('data-view');

  for (let i = 0; i < $view.length; i++) {
    console.log($view[i]);
    console.log($dataView);
    if ($view[i].getAttribute('data-view') === $dataView) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
}
