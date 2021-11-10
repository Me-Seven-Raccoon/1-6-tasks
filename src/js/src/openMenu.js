const buttonOpenMenu = document.querySelector('.button__burger');
const buttonCloseMenu = document.querySelector('.popup-menu__burger')
const classAdd = document.querySelector('.popup-menu');

buttonOpenMenu.addEventListener('click', function (evt){
  evt.preventDefault();
  classAdd.classList.add('popup-menu__open-menu');
})

buttonCloseMenu.addEventListener('click', function (){
  classAdd.classList.remove('popup-menu__open-menu')
})


classAdd.addEventListener('click', function (e){
  if ( e.target.classList.contains('popup-menu')){
    classAdd.classList.remove('popup-menu__open-menu');
  } else {
    return;
  }
})
