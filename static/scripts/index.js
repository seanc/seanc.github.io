(function($) {
  $(function() {
    $('.app').hide().fadeIn(800);
  });
})(jQuery);

var hour = (new Date()).getHours();
var night = hour > 19 || hour < 4;

window.onload = function() {
  document.body.classList.add(night ? 'night' : 'day');
}
