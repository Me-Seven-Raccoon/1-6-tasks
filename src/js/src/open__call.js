const buttonOpenPhone = document.querySelector('.popup-menu__footer-button--phone');
const buttonHeadPhone = document.querySelector('.button__phone');
const buttonClosePhone = document.querySelector('.modal-call__button');
const classAddPhone = document.querySelector('.modal-call');

buttonOpenPhone.addEventListener('click', function (evt){
  evt.preventDefault();
  classAddPhone.classList.add('modal-call__open');
})

buttonHeadPhone.addEventListener('click', function (evt){
  evt.preventDefault();
  classAddPhone.classList.add('modal-call__open');
})

buttonClosePhone.addEventListener('click', function (){
  classAddPhone.classList.remove('modal-call__open')
})

classAddPhone.addEventListener('click', function (e){
  if ( e.target.classList.contains('modal-call')){
    classAddPhone.classList.remove('modal-call__open');
  } else {
    return;
  }
})

