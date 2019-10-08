window.onload = () => {
  let burgerBtn = document.querySelector('.burger__item');
  let navItem   = document.querySelectorAll('.nav__item');
  let burgerItem   = document.querySelector('.burger__btn');
  
  
  burgerBtn.addEventListener('click', () => {
    burgerItem.classList.toggle('active');
    navItem.forEach(elem => {
      elem.style.display = (elem.style.display == "block") ? "none" : "block"
    })
  });
}