/*
$("#gifdiv").click(function() {
  if ($(this).find("img").attr("data-state") == "static") {
    $(this).find("img").attr("src", "Images/cookie.gif");
  } else {
    $(this).find("img").attr("src", "Images/cookie.png");
  }
});



$('document').ready(function() {
  $gif = $('img').first();

  $('#gif-trigger').on('click', function() {
    src = $gif.attr('Images/cookie.gif');

    $gif.attr('src', src);
  });
});
// <button class="btn btn-success btn-md" id="gif-trigger">Restart GIF</button>
*/


function doAudio() {
  var audio = new Audio('cookie.mp3');
  audio.play();
}