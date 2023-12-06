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
    $('#all_menu_contain').css({"display": "flex"});
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
    $('.visual_dep03_contain').css({"display": "flex"});
  });

  // side_menu_dep03_close
  $('.visual_dep02_menu li, .visual_dep03_contain').on('mouseleave', function(){
    $('.visual_dep03_contain').hide();
  });

  // 02_02 통계 시각화



  // 02_05 상권분석정보
  // tab_menu
  $('ul.info_business_menu_btn_area li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.info_business_menu_btn_area li').removeClass('act');
    $('.info_business_menu_content_area').removeClass('act');

    $(this).addClass('act');
    $("#"+tab_id).addClass('act');
  })



  // 03_01_통계보고서
  // $('.report_list_box').click(function(){
  //   $('.report_list').slideUp();
  //   $('.report_list_box').removeClass( 'active' );
  //     if (
  //     $(this).children('.report_list').is(':hidden')){
  //     $(this).children('.report_list').slideDown();
  //     $(this).addClass( 'active' );
  //   } else{
  //     $(this).children('.report_list').slideUp();
  //     $(this).removeClass( 'active' );
  //   }
  // });

  $('.report_list_box.title').click(function(){
    $(this).next(".content").stop().slideToggle(300);
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).next(".content").siblings(".content").slideUp(300); // 1개씩 펼치기
  });

  $('.report_list_box a').click(function(e){
    e.preventDefault();   
  });




  // 03_02_통계DB
  // 03_02_02_통계DB :: tab_menu
  $('ul.db_visual_detail_btn_area li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.db_visual_detail_btn_area li').removeClass('act');
    $('.db_visual_detail_content_area').removeClass('act');

    $(this).addClass('act');
    $("#"+tab_id).addClass('act');
  })



  
  // 03_04_통계조사안내
  $('.research_list_title').click(function(){
    $(this).next(".research_list").stop().slideToggle(300);
    $(this).toggleClass('active');
    // $(this).toggleClass('active').siblings().removeClass('active');
    // $(this).next(".research_list").siblings(".research_list").slideUp(300); // 1개씩 펼치기


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






function findParent(el, className){
  let check = el.parentNode.classList.contains(className);
  
  if(check === true){
    return el.parentNode;
  }else{
    return findParent(el.parentNode, className);
  }
}

function bindingTabEvent(wrap){
  let wrapEl = document.querySelectorAll(wrap);
  
  wrapEl.forEach(function(tabArea){
    let btn = tabArea.querySelectorAll('.visual_menu_btn_tab');
    
    btn.forEach(function(item){
      item.addEventListener('click', function(){
        let parent = findParent(this, 'visual_tab_area');
        let idx = this.dataset['idx'];
        let depth = this.dataset['depth'];
        let btnArr = parent.querySelectorAll('.visual_menu_btn_tab[data-depth="'+ depth +'"]');
        let contentArr = parent.querySelectorAll('.visual_menu_content_area[data-depth="'+ depth +'"]');
        
        btnArr.forEach(function(btn){ btn.classList.remove('act'); });
        this.classList.add('act');
        contentArr.forEach(function(content){ content.classList.remove('act'); });
        parent.querySelector('.visual_menu_content_area[data-idx="'+ idx +'"][data-depth="'+ depth +'"]').classList.add('act');
      });
    });
  });
}

bindingTabEvent('.visual_tab_wrap');



