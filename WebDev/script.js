let height = 3840; /* 2 x 1920 */
let frames = 47;
let step = 30; /* change every 30 px */

function setContSize() {
  $('.container').css('height', `${height}px`);
  $('.container').css('width', '100vw');
  $('.image-container').css('height', '100vh');
  $('.image-container').css('width', '100vw');
}

function preloadImgSeq() {
  for (i in imgSeq) {
    let img = new Image();
    img.src = imgSeq[i];
  }
}

function setInitialImg() {
  setContSize();
  $('.image-container').css('background-image', `url('${imgSeq[1]}')`);
}

function trackScrollPosition() {
  let y = window.scrollY;
  let label = Math.min(Math.ceil(y / step) + 1, frames);
  let selImg = imgSeq[label];
  $('.image-container').css('background-image', `url('${selImg}')`);
}

$(document).ready(() => {
  setInitialImg();
  $(window).scroll(() => {
    trackScrollPosition();
  });
});

const imgSeq = {
  1: 'Media/ImgSeq/ink0001.jpg',
  2: 'Media/ImgSeq/ink0002.jpg',
  3: 'Media/ImgSeq/ink0003.jpg',
  4: 'Media/ImgSeq/ink0004.jpg',
  5: 'Media/ImgSeq/ink0005.jpg',
  6: 'Media/ImgSeq/ink0006.jpg',
  7: 'Media/ImgSeq/ink0007.jpg',
  8: 'Media/ImgSeq/ink0008.jpg',
  9: 'Media/ImgSeq/ink0009.jpg',
  10: 'Media/ImgSeq/ink0010.jpg',
  11: 'Media/ImgSeq/ink0011.jpg',
  12: 'Media/ImgSeq/ink0012.jpg',
  13: 'Media/ImgSeq/ink0013.jpg',
  14: 'Media/ImgSeq/ink0014.jpg',
  15: 'Media/ImgSeq/ink0015.jpg',
  16: 'Media/ImgSeq/ink0016.jpg',
  17: 'Media/ImgSeq/ink0017.jpg',
  18: 'Media/ImgSeq/ink0018.jpg',
  19: 'Media/ImgSeq/ink0019.jpg',
  20: 'Media/ImgSeq/ink0020.jpg',
  21: 'Media/ImgSeq/ink0021.jpg',
  22: 'Media/ImgSeq/ink0022.jpg',
  23: 'Media/ImgSeq/ink0023.jpg',
  24: 'Media/ImgSeq/ink0024.jpg',
  25: 'Media/ImgSeq/ink0025.jpg',
  26: 'Media/ImgSeq/ink0026.jpg',
  27: 'Media/ImgSeq/ink0027.jpg',
  28: 'Media/ImgSeq/ink0028.jpg',
  29: 'Media/ImgSeq/ink0029.jpg',
  30: 'Media/ImgSeq/ink0030.jpg',
  31: 'Media/ImgSeq/ink0031.jpg',
  32: 'Media/ImgSeq/ink0032.jpg',
  33: 'Media/ImgSeq/ink0033.jpg',
  34: 'Media/ImgSeq/ink0034.jpg',
  35: 'Media/ImgSeq/ink0035.jpg',
  36: 'Media/ImgSeq/ink0036.jpg',
  37: 'Media/ImgSeq/ink0037.jpg',
  38: 'Media/ImgSeq/ink0038.jpg',
  39: 'Media/ImgSeq/ink0039.jpg',
  40: 'Media/ImgSeq/ink0040.jpg',
  41: 'Media/ImgSeq/ink0041.jpg',
  42: 'Media/ImgSeq/ink0042.jpg',
  43: 'Media/ImgSeq/ink0043.jpg',
  44: 'Media/ImgSeq/ink0044.jpg',
  45: 'Media/ImgSeq/ink0045.jpg',
  46: 'Media/ImgSeq/ink0046.jpg',
  47: 'Media/ImgSeq/ink0047.jpg',
};
