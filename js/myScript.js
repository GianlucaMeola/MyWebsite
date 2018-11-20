//PANEL TABEL ACTIVATION
var acc = document.getElementsByClassName("panel-table");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("attivo");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//LOADING BAR SCRIPT
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$(document).one(animationEnd, function(){
    $(".progress-bar").removeClass("barra");
    $(".progress-bar").addClass(" progress-bar-animated barra-size ");
    
});  