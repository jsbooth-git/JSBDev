/* -------- Image Sequence on Scroll --------- */

let height = 3840; /* 2 x 1920 */
let frames = 47;
let step = 30; /* change every 30 px */

function setContSize() {
  $('.container').css('height', `${height}px`);
  $('.container').css('width', '100vw');
  $('.image-container').css('height', '100vh');
  $('.image-container').css('width', '100vw');
}

function preloadImgSeq(src) {
  let img = new Image();
  img.src = src;
}

function setInitialImg() {
  setContSize();
  $('.image-container').css('background-image', `url('${imgSeq[1]}')`);
}

function loadResources() {
  for (i in imgSeq) {
    preloadImgSeq(imgSeq[i]);
  }
}

function trackScrollPosition() {
  let y = window.scrollY;
  let label;
  let selImg;
  label = Math.min(Math.floor(y / step) + 1, frames);
  selImg = imgSeq[label];
  $('.image-container').css('background-image', `url('${selImg}')`);
}

$(document).ready(() => {
  loadResources();
  setInitialImg();
  $(window).scroll(() => {
    trackScrollPosition();
    loadResources();
  });
});

const imgSeq = {
  1: 'Media/ink0001.jpg',
  2: 'Media/ink0002.jpg',
  3: 'Media/ink0003.jpg',
  4: 'Media/ink0004.jpg',
  5: 'Media/ink0005.jpg',
  6: 'Media/ink0006.jpg',
  7: 'Media/ink0007.jpg',
  8: 'Media/ink0008.jpg',
  9: 'Media/ink0009.jpg',
  10: 'Media/ink0010.jpg',
  11: 'Media/ink0011.jpg',
  12: 'Media/ink0012.jpg',
  13: 'Media/ink0013.jpg',
  14: 'Media/ink0014.jpg',
  15: 'Media/ink0015.jpg',
  16: 'Media/ink0016.jpg',
  17: 'Media/ink0017.jpg',
  18: 'Media/ink0018.jpg',
  19: 'Media/ink0019.jpg',
  20: 'Media/ink0020.jpg',
  21: 'Media/ink0021.jpg',
  22: 'Media/ink0022.jpg',
  23: 'Media/ink0023.jpg',
  24: 'Media/ink0024.jpg',
  25: 'Media/ink0025.jpg',
  26: 'Media/ink0026.jpg',
  27: 'Media/ink0027.jpg',
  28: 'Media/ink0028.jpg',
  29: 'Media/ink0029.jpg',
  30: 'Media/ink0030.jpg',
  31: 'Media/ink0031.jpg',
  32: 'Media/ink0032.jpg',
  33: 'Media/ink0033.jpg',
  34: 'Media/ink0034.jpg',
  35: 'Media/ink0035.jpg',
  36: 'Media/ink0036.jpg',
  37: 'Media/ink0037.jpg',
  38: 'Media/ink0038.jpg',
  39: 'Media/ink0039.jpg',
  40: 'Media/ink0040.jpg',
  41: 'Media/ink0041.jpg',
  42: 'Media/ink0042.jpg',
  43: 'Media/ink0043.jpg',
  44: 'Media/ink0044.jpg',
  45: 'Media/ink0045.jpg',
  46: 'Media/ink0046.jpg',
  47: 'Media/ink0047.jpg',
};
