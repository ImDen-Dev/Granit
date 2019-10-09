window.onload = () => {
  let burgerBtn = document.querySelector('.burger__item');
  let navItem   = document.querySelectorAll('.nav__item');
  let burgerItem   = document.querySelector('.burger__btn');
  let modalBtn = document.querySelectorAll('button[type=button]');
  let btns = document.querySelectorAll('.products__items');
  let cards = document.querySelectorAll('.card');
  let map = document.querySelector('.map');

  
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


// insert map

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}
let callback = function(entries, observer) { 
  entries.forEach( e => {
    if(e.intersectionRatio > 0){
      insertMap()
    }
  });
};


function insertMap(){
  map.innerHTML = `<iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%D0%BF%D1%80%D0%B0%D0%B3%D0%B0+(%D0%9F%D1%80%D0%B0%D0%B3%D0%B0)&amp;ie=UTF8&amp;t=k&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`
}


let observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.section__goods'))


// insert map
}