// gnb_menu
const navH = document.querySelector(".gnb_menu_wrap");
const head = document.querySelector("header");
navH.addEventListener('mouseenter', () => {
  head.classList.add('active');
})
head.addEventListener('mouseleave', () => {
  head.classList.remove('active');
})



// all_menu(Mobile)
$(document).ready(function(){
  $("#all_menu_contain").hide();

  $( '.all_menu_open' ).click( function() {
    $( '#all_menu_contain' ).slideDown( 300, 'linear' );
  } );

  $( '.all_menu_close' ).click( function() {
    $( '#all_menu_contain' ).slideUp( 300, 'linear' );
  } );
});


$(window).resize(function(){ 
  if (window.innerWidth > 1400) {  
  
  // 1400 이상 
  // all_menu(Mobile)
  $(document).ready(function(){
    $(".all_menu_list_wrap ul.drop_down").show();
    $(".all_menu_list_wrap li.dep_01").off("click"); 

  });


  } else {
  
    // 1400 이하 
    // all_menu(Mobile)
    $(document).ready(function(e){
      $(".all_menu_list_wrap ul.drop_down").hide();
      $(".all_menu_list_wrap li.dep_01").click(function(){
        $("ul.drop_down",this).slideToggle("fast");
        e.stopPropagation();
      });
    });


  }
  
  }).resize(); 






