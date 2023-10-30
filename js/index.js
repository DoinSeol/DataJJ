// gnb_menu
const navH = document.querySelector(".gnb_menu_wrap");
const head = document.querySelector("header");
navH.addEventListener('mouseenter', () => {
  head.classList.add('active');
})
head.addEventListener('mouseleave', () => {
  head.classList.remove('active');
})


// const report_list_box = document.querySelector(".report_list_box");

// report_list_box.addEventListener('click', () => {
//   report_list_box.classList.remove('active');
//   report_list_box.classList.add('active');
// })


$(document).ready(function(){

  // all_menu
  $("#all_menu_contain").hide();


  $( '.all_menu_open' ).on('click', function() {
    $( '#all_menu_contain' ).slideDown( 300, 'linear' );
  } );

  $( '.all_menu_close' ).on('click', function() {
    $( '#all_menu_contain' ).slideUp( 300, 'linear' );
  } );

  // side_menu_dep02_open
  $('.visual_dep01').on('click', function(){
    $('.visual_back_modal').show();
    $('.visual_dep02_contain').show().animate({
      left: 84 + 'px'
    });  
  });

  // side_menu_dep02_close
  $('.visual_back_modal, .visual_menu_close').on('click', function(){
    $('.visual_back_modal').hide(); 
    $('.visual_dep02_contain').animate({
      left: '-' + 220 + 'px'
    }
  //   ,function(){
  //     $('.sidebar_menu').hide(); 
  //   }
    ); 
  });

  // side_menu_dep03
  $(".visual_dep03_contain").hide();
  
  // side_menu_dep03_open
  $('.visual_dep02_menu li, .visual_dep03_contain').on('mouseenter', function(){
    $('.visual_dep03_contain').show();
  });

  // side_menu_dep03_close
  $('.visual_dep02_menu li, .visual_dep03_contain').on('mouseleave', function(){
    $('.visual_dep03_contain').hide();
  });

  // 03_01 통계보고서
  $('.report_list_box').click(function(){
    $('.report_list').slideUp();
    $('.report_list_box').removeClass( 'active' );
      if (
      $(this).children('.report_list').is(':hidden')){
      $(this).children('.report_list').slideDown();
      $(this).addClass( 'active' );
    } else{
      $(this).children('.report_list').slideUp();
      $(this).removeClass( 'active' );
    }
 });

});

$(window).resize(function(){ 
  if (window.innerWidth > 1400) {  
  
  // 1400 이상 
  $(document).ready(function(){
    // all_menu(PC)
    $(".all_menu_list_wrap ul.drop_down").show();
    $(".all_menu_list_wrap li.dep_01").off("click"); 
    $("aside").show();

    $("section .main_right_wrap").scroll(function(){
      var scroll = $("section .main_right_wrap").scrollTop();
      if (scroll > 1) {
          // scrolldown
          $( 'header' ).addClass( 'pc_header_scroll_d' );
      }
      else{
        $( 'header' ).removeClass( 'pc_header_scroll_d' );
        
      }
    })

  });



  } else {
  
    // 1400 이하 
    $(document).ready(function(e){
      // all_menu(Mobile)
      $(".all_menu_list_wrap ul.drop_down").hide();
      $(".all_menu_list_wrap li.dep_01").click(function(){
        $("ul.drop_down",this).slideToggle("fast");
        e.stopPropagation();
      });

      $("aside, .visual_dep02_contain, .visual_dep03_contain,  .visual_back_modal").hide();

      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          // scrolldown
          $( '.login_mobile' ).addClass( 'mobile_login_scroll_d' );
          $( 'header' ).addClass( 'mobile_header_scroll_d' );
        }
        else{
          $( '.login_mobile' ).removeClass( 'mobile_login_scroll_d' );
          $( 'header' ).removeClass( 'mobile_header_scroll_d' );
        }
      })


    });




  }
  
  }).resize(); 






