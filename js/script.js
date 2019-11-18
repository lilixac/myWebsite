$(window).on("load", function () {
  $(".loader").fadeOut(3000, function () {
    $(".loader").fadeOut(2000);    
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: 'false',
    }
  });
})

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});

$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade' ,
    pagination: false,
    play: 3000
  });

  var typed = new Typed(".typed", {
    strings: [
      'Computer Engineer.',
      'Student.',
      'Blockchain Developer.',
    ],
    loop: true,
    typeSpeed: 70,
    showCursor: false,
    startDelay: 2000,
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
      }
    }
  })  

  var skilltoppp = $(".skill-section").offset().top;
  var statstoppp = $(".skill-section").offset().top;
  $(window).scroll(function(){
    if(window.pageYOffset > skilltoppp-$(window).height() + 200){
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        scaleColor: false,
        size: 150,
        lineWidth: 5,
        barColor: '#d4af37',
        trackColor: false,
      });
    }

    if(window.pageYOffset > statstoppp-$(window).height() + 500){
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },  
        {  
          duration: 300,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }  
        }); 
      });
    }
  })

  $("[data-fancybox").fancybox();  

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: 'false',
      }
    });
    return false;
  })

  $("#navigation li a").click(function(e) {
    e.preventDefault();
    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html,body").animate({ scrollTop: targetPosition - 50}, "slow");
  });

  const nav =$("#navigation");
  const navTop = nav.offset().top;
  $(window).on('scroll', function stickyNavigation(){
    var body = $("body");
    if($(window).scrollTop() >= navTop){
      body.css("padding-top", nav.outerHeight() + 'px');
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  });

  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 

});

