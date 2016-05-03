$(img).on('hover',hoverEvent());

hoverEvent = function(){
  this.animate({
      height: '1.5em',
      width: '1.5em',

  }, 'slow')
};