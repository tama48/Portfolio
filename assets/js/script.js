// fullpage
$(document).ready(function() {

  $('#fullpage').fullpage({
      autoScrolling:true,
      fitToSection: true,
      responsiveWidth: 1200,
      scrollingSpeed:700,
      navigation: true,
      navigationPosition: 'fp-right',
      navigationTooltips: ["Home", "About", "Skill", "Work", "Contact"],
      KeyboardAcrolling: true,
      menu: "#menu",
      controlArrows:true,
      slideNavigation:true,

      
      onLeave: function(){
        jQuery('.section [data-aos]').removeClass("aos-animate");
      },
      onSlideLeave: function(){
        jQuery('.slide [data-aos]').removeClass("aos-animate");
      },
      afterSlideLoad: function(){
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
      },
      afterLoad: function(){
        jQuery('.section.active [data-aos]').addClass("aos-animate");
      },
  });
});

// 우주
var siteWidth = $('.stars').width();
for (i = 0; i <= 40; i++) {
  var start = $('<div>')
  .addClass('star star_'+i)
  .css({
    top: Math.floor(Math.random()*450),
    left: Math.floor(Math.random()*siteWidth)
  })
  .appendTo('.stars');
}

$('#btn_top').click(function () {
  //$.fn.fullpage.setScrollingSpeed(0); 효과를 없애고싶을때
  $.fn.fullpage.moveTo(1, 1); // 이동하고싶은 페이지
  //$.fn.fullpage.setScrollingSpeed(700); 효과를 없애고싶을때
});

// $(document).ready(function() {
//   $(window).scroll(function(){
//      if($().scrollTop() > 100) {
//         $('#btn_top').fadeIn();
//      } else {
//         $('#btn_top').fadeOut();
//      }
//   }); //scroll
  
//   $('#btn_top').click(function(){
//      $('html,body').animate({
//         scrollTop: 0
//      },200);
//   });
  
// });