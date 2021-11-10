const showContent = document.querySelectorAll('.repaer-apparats__show');
const buttonText = document.querySelector('.repaer-apparats__button--show-text')
const iconButton = document.querySelector('.repaer-apparats-image');
var pc1 = 'src/img/icons/icon-down.svg';
var pc2 = 'src/img/icons/icon-up.svg';

buttonText.addEventListener('click', function (evt){

  for (var i = 0; i < showContent.length; i++){
    showContent[i].classList.toggle('repaer-apparats__show');
  }

  if(buttonText.innerHTML === 'Скрыть'){
    buttonText.innerHTML = 'Показать все';
    showContent.classList.toggle('repaer-apparats__show');
    iconButton.src = pc2

  } else {
    buttonText.innerHTML = 'Скрыть';
    showContent.classList.toggle('repaer-apparats__show');
    iconButton.src = pc1
  }
});
