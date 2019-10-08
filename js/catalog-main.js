'use strict'

window.onload = () => {

  btnActive();

  function btnActive() {
    var btns = document.getElementsByClassName('products__items');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].classList.remove('active')
        this.classList.add('active');
        var attr = this.getAttribute('data-target');
        if(attr == 'all'){
          showCard()
        }else{
          showCard(),
          hideCard(attr)
        };
      });
    }
  }

  function hideCard(card) {
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
      var attr = cards[i].getAttribute('data-card');
      if(card != attr){
        cards[i].classList.add('hide')
      }
    }
  }
  function showCard() {
    var cards = document.getElementsByClassName('card');
    for (var x = 0; x < cards.length; x++) {
      cards[x].classList.remove('hide')
    }
  }

}
