$(document).ready(function(){

  function closeMenu(){
    $('#menu-desktop').animate({
      width: '75px'
    });
    $('#menu-mobile').animate({
      height: '75px'
    });
    $('.menu-middle').hide();
    $('.hamburger').removeClass('is-active');
  };

  function showMenu(){
    $('#menu-desktop').animate({
      width: '400px'
    });
    $('#menu-mobile').animate({
      height: '100%'
    });
    $('.menu-middle').show();
    $('.hamburger').addClass('is-active');
  };

  closeMenu();

  var Areas = ['a','#page'];
  for( var i = 0; i < Areas.length; i++ ){
    (function(area) {
      $(area).click(function(){
        if($('.hamburger').hasClass('is-active') === true){
          closeMenu();
        }
      });
    })(Areas[i]);
  }


  if(window.matchMedia("(max-width: 990px)").matches){
    $('#page header div#block-header').animate({
      top: '50%'
    });
  }else{
    $('#page header div#block-header').animate({
      top: '0px'
    });
  }


  //https://wandls.net/products/gridzy/documentation
  $('.gridzy').gridzy({
    spaceBetweenElements: 2,
  });

  $('.hamburger').click(function(e){
    e.preventDefault();
    if(this.classList.contains('is-active') === true){
      closeMenu();
    }else{
      showMenu();
    }
  })

  window.onresize = function() {
    if(window.matchMedia("(max-width: 990px)").matches){
      $('#menu-mobile').css('display', 'block');
      $('#menu-mobile').css('height', '75px');
      $('#menu-desktop').css('width', '0');
      $('#menu-desktop').css('display', 'none');
      $('#page header div#block-header').css('top', '50%');
    }else{
      $('#menu-mobile').css('display', 'none');
      $('#menu-mobile').css('height', '0');
      $('#menu-desktop').css('width', '75px');
      $('#menu-desktop').css('display', 'block');
      $('#page header div#block-header').css('top', '0');
    }
  }

  var alreadyClick;
  $('.item-experience').click(function(){
    var experience = $(this).attr('data-experience');
    var item = $("#liste-experiences *[data-experience='"+experience+"']");
    $('#information-experience').animate({
      right: '-300px'
    },function(){
      $("#liste-experiences *[data-experience='"+alreadyClick+"']").css('border-right', '5px solid rgba(229,57,53,.7)');
      if(alreadyClick !== experience){
        alreadyClick = experience;
        $('#texte-experience span').html($(item).children('span').html());
        $(item).css('border-right', '5px solid '+$(item).css('background-color'))
        $('#texte-experience').css('background-color', $(item).css('background-color') );
        $('#information-experience').animate({
          right: '0'
        });
      }else{
        alreadyClick = undefined;
      }
    });
  });
});
