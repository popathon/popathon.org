$(document).ready(function(){

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $('.video').after('<canvas class="canvas"></canvas>');
    var canvasVideo = new CanvasVideoPlayer({
      videoSelector: '.video',
      canvasSelector: '.canvas',
      timelineSelector: false,
      autoplay: true,
      makeLoop: true,
      pauseOnClick: false,
      audio: false
    });
  }



  $('html').removeClass('no-js').addClass('js ready');

});

