const showContent = document.querySelectorAll('.repaer-brend__show');
const buttonText = document.querySelector('.repaer-brend__button--show-text')
const iconButton = document.querySelector('.repaer-brend-image');


buttonText.addEventListener('click', function (evt){

  for (var i = 0; i < showContent.length; i++){
    showContent[i].classList.toggle('repaer-brend__show');
  }

  if(buttonText.innerHTML === 'Скрыть'){
    buttonText.innerHTML = 'Показать все';
    showContent.classList.toggle('repaer-brend__show');
    iconButton.src = 'src/img/icons/icon-down.svg';

  } else {
    buttonText.innerHTML = 'Скрыть';
    showContent.classList.toggle('repaer-brend__show');
    iconButton.src = 'src/img/icons/icon-up.svg';
  }
});
