const buttonOpenMessage = document.querySelector('.popup-menu__footer-button--message');
const buttonHeadMessage = document.querySelector('.button__message');
const buttonCloseMessage = document.querySelector('.modal-fettback__header-button');
const classAddMessage = document.querySelector('.modal-fettback');

buttonHeadMessage.addEventListener('click', function (evt){
  evt.preventDefault();
  classAddMessage.classList.add('modal-fettback__feetback-open');
})

buttonOpenMessage.addEventListener('click', function (evt){
  evt.preventDefault();
  classAddMessage.classList.add('modal-fettback__feetback-open');
})

buttonCloseMessage.addEventListener('click', function (){
  classAddMessage.classList.remove('modal-fettback__feetback-open')
})

classAddMessage.addEventListener('click', function (e){
  if ( e.target.classList.contains('modal-fettback')){
    classAddMessage.classList.remove('modal-fettback__feetback-open');
  } else {
    return;
  }
})

