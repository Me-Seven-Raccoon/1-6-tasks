const showContent = document.querySelector('.content__text-to');
const buttonText = document.querySelector('.content__button--show-text')
const iconButton = document.querySelector('.content__button-image');


buttonText.addEventListener('click', function (evt){

if(buttonText.innerHTML === 'Скрыть'){
  buttonText.innerHTML = 'Читать далее';
  showContent.classList.toggle('content__text-to');
  iconButton.src = 'img/icons/icon-down.svg';

} else {
  buttonText.innerHTML = 'Скрыть';
  showContent.classList.toggle('content__text-to');
  iconButton.src = 'img/icons/icon-up.svg';
}
});
