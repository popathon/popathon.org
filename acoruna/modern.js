$(document).ready(function(){

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    $('.video').after('<canvas class="canvas-video"></canvas>');
    setTimeout(function(){
      var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas-video',
        timelineSelector: false,
        autoplay: true,
        makeLoop: true,
        pauseOnClick: false,
        audio: false
      });
    },1);
  }

  $('html').removeClass('no-js').addClass('js ready');

});

