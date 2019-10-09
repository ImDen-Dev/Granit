window.onload = () => {
  let burgerBtn = document.querySelector('.burger__item');
  let navItem   = document.querySelectorAll('.nav__item');
  let burgerItem   = document.querySelector('.burger__btn');
  let modalBtn = document.querySelectorAll('button[type=button]');
  let btns = document.querySelectorAll('.products__items');
  let cards = document.querySelectorAll('.card');
  // let closeWrapper = document.querySelector('.modal__wrapper');

  
  burgerBtn.addEventListener('click', () => {
    burgerItem.classList.toggle('active');
    navItem.forEach(elem => {
      elem.style.display = (elem.style.display == "block") ? "none" : "block"
    })
  });

  modalBtn.forEach(element => {
    
    let modal = document.getElementById(element.dataset.target);

    element.addEventListener('click', () => {
      let cardTitle = element.parentNode.querySelector('h4');
      // modal.style.display = 'block';
      fadeIn(modal)
      
      if(cardTitle){
        let text = cardTitle.textContent;
        let modalTitle = modal.querySelector('.modal__title');
        modalTitle.innerText = `Оставить заявку на ${text}`
      }

    });

    let closeModal = modal.querySelector('.modal__close');
    
    closeModal.addEventListener('click', () => {
      fadeOut(modal);
    });

    let closeWrapper = modal.querySelector('.modal__wrapper');
    
    closeWrapper.addEventListener('click', e => {
      if (e.target.closest('.modal__wrapper') && !e.target.closest('.modal__window'))
      {
        fadeOut(modal);
      }
    });

  });


  function fadeOut(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
  }

  function fadeIn(element) {
    var op = 0.1;
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
  }



// card selection
  btns.forEach(btn =>{
    btn.addEventListener('click', () => {
      let current = document.querySelector('.active');
      current.classList.remove('active');
      btn.classList.add('active');
      let attr = btn.dataset.target;
      (attr == 'all') ? showCard() : (showCard(), hideCard(attr));
    });
  });

  function hideCard(attr) {
    cards.forEach(c => {
      let cardAttr = c.dataset.card;
      (attr != cardAttr) ? c.classList.add('hide') : null
    });
  };

  function showCard() {
    cards.forEach(c => {
      c.classList.remove('hide')
    });
  };
// card selection

}