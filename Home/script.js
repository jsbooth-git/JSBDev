// --------------------- Display Page  and Slogan After Load ----------------- //

let pageHidden = true;
$(window).on('load', function () {
  $('#pageHidden').css('opacity', '0');
  pageHidden = false;

  setTimeout(function () {
    if (pageHidden == false) {
      $('#pageHidden').remove();
      $('#slogan1').css('opacity', '1');
    }
  }, 500);

  setTimeout(function () {
    if (pageHidden == false) {
      $('#slogan2').css('opacity', '1');
    }
  }, 1000);
});

// ------------------------------ Popup Card Script ------------------------- //

let popupViews = document.querySelectorAll('.popup-view');
let popupBtns = document.querySelectorAll('.popup-btn');
let closeBtns = document.querySelectorAll('.fa-xmark');

// View button functionality
let popup = function (popupClick) {
  popupViews[popupClick].classList.add('active');
};

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener('click', () => {
    popup(i);
  });
});

// Close button functionality
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});

// ------------------------------ Portfolio Script ------------------------- //

let root = document.documentElement;
const cardLists = document.querySelectorAll('.scroll');
cardLists.forEach((el) => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});
