// --------------------- Display Page  and Slogan After Load ----------------- //

var pageHidden = true;

$(window).on('load', function () {
  $('#pageHidden').css('opacity', '0');
  pageHidden = false;

  setTimeout(function () {
    if (pageHidden == false) {
      $('#pageHidden').remove();
      $('#slogan1').css('opacity', '1');
    }
  }, 200);

  setTimeout(function () {
    if (pageHidden == false) {
      $('#slogan2').css('opacity', '1');
    }
  }, 3500);
});

// ------------------------------ Popup Card Script ------------------------- //

var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.fa-xmark');

// View button functionality
var popup = function (popupClick) {
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

var root = document.documentElement;
const cardLists = document.querySelectorAll('.scroll');
cardLists.forEach((el) => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});
