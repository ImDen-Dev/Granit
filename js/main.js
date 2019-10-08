window.onload = () => {
  let burgerBtn = document.querySelector('.burger__item');
  let navItem   = document.querySelectorAll('.nav__item');
  let burgerItem   = document.querySelector('.burger__btn');
  let modalBtn = document.querySelectorAll('button[type=button]');
  
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
      modal.style.display = 'block';
      
      if(cardTitle){
        let text = cardTitle.textContent;
        let modalTitle = modal.querySelector('.modal__title');
        modalTitle.innerText = `Оставить заявку на ${text}`
      }

    });

    let closeModal = modal.querySelector('.modal__close');
    
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
}