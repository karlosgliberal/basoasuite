var myScroll;

function loaded () {
  myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
