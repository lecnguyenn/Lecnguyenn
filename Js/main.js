// 

// #Preload
// ---------------------------------------
$("html").addClass('ss-preload');

$(window).on('load',  function(){
  $("#loader").fadeOut("slow", function(){
    $("#preloader"). delay(100).faceOut("slow");
  });

  $("html").remove('ss-preload');
  $("html").addClass('ss-loaded');
});






$( document ).ready(function() {

    var toggleButton = $('.header-menu-toggle'),
    nav = $('.header-nav-wrap');
   
    toggleButton.on("click", () =>{
        console.log("clicked");
     // event.preventDefault();
       toggleButton.toggleClass('is-clicked');
       nav.slideToggle();
    });

    if(toggleButton.is(':visible')) nav.addClass('mobile');
    $(window).on('resize', function(){
        if(toggleButton.is(':visible')) nav.addClass('mobile');
        else nav.remove('mobile');
    });
    nav.find('a').on("click",function(){
        if(nav.hasClass('mobile')){
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        }
     });

// # Move header
  var text_color_1 = $('.header-nav li a')[1];
  var text_color_2 = $('.header-nav li a')[2];
  var text_color_3 = $('.header-nav li a')[3];
 

  
  var hero =$('.page-hero'),
      hdr = $('header'),
      triggerHeight = hero.outerHeight()-200;
      $(window).on('scroll',function(){

        var loc = $(window).scrollTop();
        
        if(loc > triggerHeight) {
          hdr.addClass('sticky');
          text_color_1.style.color = "white";
          text_color_2.style.color = "white";
          text_color_3.style.color = "white";
          console.log('sticky');
        }
     
        else{
          hdr.removeClass('sticky');
          text_color_1.style.color = "black";
          text_color_2.style.color = "black";
          text_color_3.style.color = "black";
          console.log('remove sticky');
        }

        if(loc > triggerHeight + 20){
          hdr.addClass('offset');
          console.log('offset');
        }
        else{
          hdr.removeClass('offset');
          console.log(' remove offset');
        }
        if(loc > triggerHeight + 100){
          hdr.addClass('scrolling');
          console.log('scrolling');
        }
        else{
          hdr.removeClass('scrolling');
          console.log('remove scrolling');
        }
      })

});
// smooth Scrolling





    // # animation text
setTimeout(function(){
    var element_1 = $(".text-animation_1")[0];
    element_1.style.opacity = '1';
    // replace each char with <span class="letter">{char} </span>
    
    element_1.innerHTML = element_1.textContent.replace(/\S/g,'<h1 class="letter">$&</h1>');
    
    anime.timeline()
    .add({
      targets:'.text-animation_1 .letter',
      scale:[3,1],
      opacity:[0,1],
      translateZ:0,
      duration:1000,
      easing:"easeOutExpo",
      delay:(elem, index) => index*150
    });
  },2000)
setTimeout(function(){
    var element_2 = $(".text-animation_2")[0];
    element_2.style.opacity = '1';
    element_2.innerHTML = element_2.textContent.replace(/\S/g,'<h1 class="letter">$&</h1>');
    
    anime.timeline()
    .add({
      targets:'.text-animation_2 .letter',
      scale:[3,1],
      opacity:[0,1],
      translateZ:0,
      duration:1000,
      easing:"easeOutExpo",
      delay:(elem, index) => index*150
    })
  },4500)

    
