$(document).ready(function(){

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        
                /*Если сделали скролл на 100px задаём новый класс для header*/
        if(height > 100){
        $('.header__inner').addClass('fixed');
        } else{
                /*Если меньше 100px удаляем класс для header*/
        $('.header__inner').removeClass('fixed');
        }
        
        });


    


  $('.header__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/next.svg"></button>',
    cssEase: 'linear'
  });

  $('.review__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  });

  //   parallax in review
  $('.parallax-window').parallax({imageSrc: '../images/parallax.jpg'});

  /**
* jQuery scroroller Plugin 1.0
*
* http://www.tinywall.net/
* 
* Developers: Arun David, Boobalan
* Copyright (c) 2014 
*/
(function($){
  $(window).on("load",function(){
      $(document).scrollzipInit();
      $(document).rollerInit();
  });
  $(window).on("load scroll resize", function(){
      $('.numscroller').scrollzip({
          showFunction    :   function() {
                                  numberRoller($(this).attr('data-slno'));
                              },
          wholeVisible    :     false,
      });
  });
  $.fn.scrollzipInit=function(){
      $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
  };
  $.fn.rollerInit=function(){
      var i=0;
      $('.numscroller').each(function() {
          i++;
         $(this).attr('data-slno',i); 
         $(this).addClass("roller-title-number-"+i);
      });        
  };
  $.fn.scrollzip = function(options){
      var settings = $.extend({
          showFunction    : null,
          hideFunction    : null,
          showShift       : 0,
          wholeVisible    : false,
          hideShift       : 0,
      }, options);
      return this.each(function(i,obj){
          $(this).addClass('scrollzip');
          if ( $.isFunction( settings.showFunction ) ){
              if(
                  !$(this).hasClass('isShown')&&
                  ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                  ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
              ){
                  $(this).addClass('isShown');
                  settings.showFunction.call( this );
              }
          }
          if ( $.isFunction( settings.hideFunction ) ){
              if(
                  $(this).hasClass('isShown')&&
                  (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                  ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
              ){
                  $(this).removeClass('isShown');
                  settings.hideFunction.call( this );
              }
          }
          return this;
      });
  };
  function numberRoller(slno){
          var min=$('.roller-title-number-'+slno).attr('data-min');
          var max=$('.roller-title-number-'+slno).attr('data-max');
          var timediff=$('.roller-title-number-'+slno).attr('data-delay');
          var increment=$('.roller-title-number-'+slno).attr('data-increment');
          var numdiff=max-min;
          var timeout=(timediff*1000)/numdiff;
          //if(numinc<10){
              //increment=Math.floor((timediff*1000)/10);
          //}//alert(increment);
          numberRoll(slno,min,max,increment,timeout);
          
  }
  function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
      if(min<=max){
          $('.roller-title-number-'+slno).html(min);
          min=parseInt(min)+parseInt(increment);
          setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
      }else{
          $('.roller-title-number-'+slno).html(max);
      }
  }
})(jQuery);


$('#pagepiling').pagepiling({
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage', 'lastPage'],
    menu: '#myMenu'
});

});