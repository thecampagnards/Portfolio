jQuery(document).ready(function($){


/***************** Smooth Scrolling ******************/

  function niceScrollInit(){
    $("html").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 40,
      cursorwidth: 15,
      cursorborder: 0,
      cursorcolor: '#303030',
      cursorborderradius: 6,
      autohidemode: false,
      horizrailenabled: false
    });


    if($('#boxed').length == 0){
      $('body, body #header-outer, body #header-secondary-outer, body #search-outer').css('padding-right','16px');
    } else {
      $('body').css('padding-right','16px');
    }

    $('html').addClass('no-overflow-y');
  }

  var $smoothActive = $('body').attr('data-smooth-scrolling');
  var $smoothCache = ( $smoothActive == 1 ) ? true : false;

  if( $smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)){ niceScrollInit(); } else {
    $('body').attr('data-smooth-scrolling','0');
  }




/*-------------------------------------------------------------------------*/
/*  4.  Header + Search
/*-------------------------------------------------------------------------*/



/***************** Page Headers ******************/

var pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
var pageHeaderHeightCopy = parseInt($('#page-header-bg').attr('data-height'));
var pageHeadingHeight;

//set the user defined height
if($('#header-outer[data-transparent-header="true"]').length > 0) {
  //if( pageHeaderHeight < $('#header-space').height() + 150) {
  //  pageHeaderHeight = $('#header-space').height() + 150;
  //  pageHeaderHeightCopy = $('#header-space').height() + 150;
  //}
}

$('#page-header-bg').css('height',pageHeaderHeight+'px').removeClass('not-loaded');
setTimeout(function(){ $('#page-header-bg').css('overflow','visible') },800);

function pageHeader(){


  if( window.innerWidth < 1000 && window.innerWidth > 690 && !$('body').hasClass('salient_non_responsive') ) {

    $('#page-header-bg').attr('data-height', pageHeaderHeightCopy/1.6).css('height',pageHeaderHeightCopy/1.6 +'px');

  } else if( window.innerWidth <= 690 && window.innerWidth > 480 && !$('body').hasClass('salient_non_responsive')) {

    $('#page-header-bg').attr('data-height', pageHeaderHeightCopy/2.1).css('height',pageHeaderHeightCopy/2.1 +'px');

  } else if( window.innerWidth <= 480 && !$('body').hasClass('salient_non_responsive')) {

    $('#page-header-bg').attr('data-height', pageHeaderHeightCopy/2.5).css('height',pageHeaderHeightCopy/2.5 +'px');

  } else {
    $('#page-header-bg').attr('data-height', pageHeaderHeightCopy).css('height',pageHeaderHeightCopy +'px');
    if($('#page-header-bg[data-parallax="1"]').length == 0) $('#page-header-wrap').css('height',pageHeaderHeightCopy +'px');
  }


  if(!$('body').hasClass('mobile')){

    //recalc
    pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));
    $('#page-header-bg .container > .row').css('top',0);

    //center the heading
    pageHeadingHeight = $('#page-header-bg .col.span_6').height();

    if($('#header-outer[data-transparent-header="true"]').length > 0) {
      $('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', ((pageHeaderHeight+$('#header-space').height())/2) - (pageHeadingHeight/2));
    } else {
      $('#page-header-bg:not("[data-parallax=1]") .col.span_6').css('top', (pageHeaderHeight/2) - (pageHeadingHeight/2) + 22);
    }


    //center portfolio filters
    $('#page-header-bg:not("[data-parallax=1]") #portfolio-filters').css('top', (pageHeaderHeight/2) + 2);

    if($('#page-header-bg[data-parallax="1"] .span_6').css('opacity') > 0) {

      if($('#header-outer[data-transparent-header="true"]').length > 0) {
        //center the parallax heading
          $('#page-header-bg[data-parallax="1"] .span_6').css({
          'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+60)),
          'top' : (((pageHeaderHeight+$('#header-space').height())/2) - (pageHeadingHeight/2)) +"px"
          });

          //center parllax portfolio filters
          $('#page-header-bg[data-parallax="1"] #portfolio-filters').css({
          'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+75)),
          'top' : ($scrollTop*-0.10) + ((pageHeaderHeight/2)) - 7 +"px"
          });
      } else {
          //center the parallax heading
          $('#page-header-bg[data-parallax="1"] .span_6').css({
          'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+60)),
          'top' : ((pageHeaderHeight/2) - (pageHeadingHeight/2)) +10 +"px"
          });

          //center parllax portfolio filters
          $('#page-header-bg[data-parallax="1"] #portfolio-filters').css({
          'opacity' : 1-($scrollTop/(pageHeaderHeight-($('#page-header-bg .col.span_6').height()*2)+75)),
          'top' : ($scrollTop*-0.10) + ((pageHeaderHeight/2)) - 7 +"px"
          });
      }
     }
  }

  else {
    //recalc
    pageHeaderHeight = parseInt($('#page-header-bg').attr('data-height'));

    //center the heading
    var pageHeadingHeight = $('#page-header-bg .container > .row').height();
    $('#page-header-bg .container > .row').css('top', (pageHeaderHeight/2) - (pageHeadingHeight/2) + 5);

  }


  $('#page-header-bg .container > .row').css('visibility','visible');
}

pageHeader();


if($('#header-outer').attr('data-header-resize') == '' || $('#header-outer').attr('data-header-resize') == '0'){
  $('#page-header-wrap').css('margin-top','0');
}



/***************** WooCommerce Cart *****************/
var timeout;
var productToAdd;

//notification
$('.woocommerce .product-wrap .add_to_cart_button').click(function(){
  productToAdd = $(this).parents('li').find('h3').text();
  $('#header-outer .cart-notification span.item-name').html(productToAdd);
});

//notification hover
$('#header-outer .cart-notification').hover(function(){
  $(this).fadeOut(400);
  $('#header-outer .widget_shopping_cart').stop(true,true).fadeIn(400);
  $('#header-outer .cart_list').stop(true,true).fadeIn(400);
  clearTimeout(timeout);
});

//cart dropdown
$('#header-outer div.cart-outer').hover(function(){
  $('#header-outer .widget_shopping_cart').stop(true,true).fadeIn(400);
  $('#header-outer .cart_list').stop(true,true).fadeIn(400);
  clearTimeout(timeout);
  $('#header-outer .cart-notification').fadeOut(300);
},function(e){
  setTimeout(function(){
    if(!$('.cart-outer').is(':hover')){
      $('#header-outer .widget_shopping_cart').stop(true,true).fadeOut(300);
      $('#header-outer .cart_list').stop(true,true).fadeOut(300);
    }
  },100);
});

$('body').bind('added_to_cart', shopping_cart_dropdown_show);
$('body').bind('added_to_cart', shopping_cart_dropdown);

function shopping_cart_dropdown() {

    if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 ) {
      $('.cart-menu-wrap').addClass('has_products');
      $('header#top nav > ul, #search-outer #search #close a').addClass('product_added');
    }
}

function shopping_cart_dropdown_show(e) {

    clearTimeout(timeout);

    if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && $('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && typeof e.type != 'undefined' ) {
      //before cart has slide in
      if(!$('#header-outer .cart-menu-wrap').hasClass('has_products')) {
        setTimeout(function(){ $('#header-outer .cart-notification').fadeIn(400); },400);
      }
      else if(!$('#header-outer .cart-notification').is(':visible')) {
        $('#header-outer .cart-notification').fadeIn(400);
      } else {
        $('#header-outer .cart-notification').show();
      }
      timeout = setTimeout(hideCart,2700);
    }
}

function hideCart() {
  $('#header-outer .cart-notification').stop(true,true).fadeOut();
}

setTimeout(shopping_cart_dropdown,550);
setTimeout(shopping_cart_dropdown,650);
setTimeout(shopping_cart_dropdown,950);
setTimeout(shopping_cart_dropdown,1650);




/***************** Nav ******************/

  var logoHeight = parseInt($('#header-outer').attr('data-logo-height'));
  var headerPadding = parseInt($('#header-outer').attr('data-padding'));
  var usingLogoImage = $('#header-outer').attr('data-using-logo');

  if( isNaN(headerPadding) || headerPadding.length == 0 ) { headerPadding = 28; }
  if( isNaN(logoHeight) || usingLogoImage.length == 0 ) { usingLogoImage = false; logoHeight = 30;}

  //inital calculations
  function headerInit() {

    $('#header-outer #logo img').css({
      'height' : logoHeight,
    });

    $('#header-outer').css({
      'padding-top' : headerPadding
    });

    $('header#top nav > ul > li > a').css({
      'padding-bottom' : Math.ceil( ((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding),
      'padding-top' : Math.ceil( (logoHeight/2) - ($('header#top nav > ul > li > a').height()/2))
    });

    $('#header-outer .cart-menu').css({
      'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding),
      'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding)
    });

    $('header#top nav > ul li#search-btn').css({
      'padding-bottom' : (logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2),
      'padding-top' : (logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2)
    });


    $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').css({
      'top' : $('header#top nav > ul > li > a').outerHeight()
    });


    setTimeout(function(){
      $('#search-outer #search-box .ui-autocomplete').css({
        'top': parseInt($('#header-outer').outerHeight())+'px'
      });
    },1000);

    $('#search-outer #search-box .ui-autocomplete').css({
      'top': parseInt($('#header-outer').outerHeight())+'px'
    });

    //header space
    if($('#header-outer').attr('data-using-secondary') == '1'){
      $('#header-space').css('height', parseInt($('#header-outer').outerHeight()) + 34);
    } else {
      $('#header-space').css('height', $('#header-outer').outerHeight());
    }

    $('#header-outer .container, #header-outer .cart-menu').css('visibility','visible');


    $('#search-outer, #search .container').css({
      'height' : logoHeight + headerPadding*2
    });

    $('#search-outer > #search input[type="text"]').css({
      'font-size'  : 43,
      'top' : ((logoHeight + headerPadding*2)/2) - $('#search-outer > #search input[type="text"]').height()/2
    });

    $('#search-outer > #search #close a').css({
      'top' : ((logoHeight + headerPadding*2)/2) - 8
    });

    //if no image is being used
    //if(usingLogoImage == false) $('header#top #logo').addClass('no-image');

  }

  //one last check to make sure the header space is correct (only if the user hasn't scrolled yet)
  $(window).load(function(){
    if($(window).scrollTop() == 0 ) {

      if($('#header-outer').attr('data-using-secondary') == '1'){
        $('#header-space').css('height', parseInt($('#header-outer').outerHeight()) + 34);
      } else {
        $('#header-space').css('height', $('#header-outer').outerHeight());
      }

    }
  });


  //is header resize on scroll enabled?
  var headerResize = $('#header-outer').attr('data-header-resize');
  if( headerResize == 1 ){

    headerInit();

    $(window).bind('scroll',smallNav);
  } else {
    headerInit();
    $(window).bind('scroll',opaqueCheck);
  }

  //if user starts in mobile but resizes to large, don't break the nav
  if($('body').hasClass('mobile')){
    $(window).resize(headerInit);
  }


  function smallNav(){
    var $offset = $(window).scrollTop();
    var $windowWidth = $(window).width();
    var shrinkNum = 6;

    if (logoHeight >= 40 && logoHeight < 60) shrinkNum = 8;
    else if (logoHeight >= 60 && logoHeight < 80) shrinkNum = 10;
    else if (logoHeight >= 80 ) shrinkNum = 14;

    if($offset > 0 && $windowWidth > 1000) {

      if($('#header-outer').attr('data-transparent-header') == 'true') $('#header-outer').removeClass('transparent');
      $('.ns-loading-cover').hide();

      $('#header-outer').addClass('small-nav');

      $('#header-outer #logo img').stop(true,true).animate({
        'height' : logoHeight - shrinkNum
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#header-outer').stop(true,true).animate({
        'padding-top' : headerPadding / 1.8
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('header#top nav > ul > li > a').stop(true,true).animate({
        'padding-bottom' :  (((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding / 1.8 ,
        'padding-top' :  ((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#header-outer .cart-menu').stop(true,true).animate({
        'padding-bottom' : Math.floor((((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding / 1.7),
        'padding-top' : Math.floor((((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding / 1.7)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('header#top nav > ul li#search-btn').stop(true,true).animate({
        'padding-bottom' : Math.floor(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2)),
        'padding-top' : Math.floor(((logoHeight-shrinkNum)/2) - ($('header#top nav > ul li#search-btn a').height()/2))
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true,true).animate({
        'top' : Math.floor($('header#top nav > ul > li > a').height() + (((logoHeight-shrinkNum)/2) - ($('header#top nav > ul > li > a').height()/2))*2 + headerPadding / 1.8),
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('#search-outer #search-box .ui-autocomplete').stop(true,true).animate({
        'top': Math.floor((logoHeight-shrinkNum) + (headerPadding*2)/ 1.8) +'px'
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('#search-outer, #search .container').stop(true,true).animate({
        'height' : Math.floor((logoHeight-shrinkNum) + (headerPadding*2)/ 1.8)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#search-outer > #search input[type="text"]').stop(true,true).animate({
        'font-size'  : 30,
        'line-height' : '30px',
        'top' : ((logoHeight-shrinkNum+headerPadding+5)/2) - ($('#search-outer > #search input[type="text"]').height()-15)/2
      },{queue:false, duration:250, easing: 'easeOutCubic'});



      $('#search-outer > #search #close a').stop(true,true).animate({
        'top' : ((logoHeight-shrinkNum + headerPadding+5)/2) - 10
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      //if no image is being used
      if(usingLogoImage == false) $('header#top #logo').stop(true,true).animate({
        'margin-top' : 0
      },{queue:false, duration:450, easing: 'easeOutExpo'});

      $(window).unbind('scroll',smallNav);
      $(window).bind('scroll',bigNav);
    }
  }

  function bigNav(){
    var $offset = $(window).scrollTop();
    var $windowWidth = $(window).width();
    if($offset == 0 && $windowWidth > 1000) {

      $('#header-outer').removeClass('small-nav');

      if($('#header-outer').attr('data-transparent-header') == 'true') $('#header-outer').addClass('transparent');
      $('.ns-loading-cover').show();

      $('#header-outer #logo img').stop(true,true).animate({
        'height' : logoHeight,
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('#header-outer').stop(true,true).animate({
        'padding-top' : headerPadding
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('header#top nav > ul > li > a').stop(true,true).animate({
        'padding-bottom' : ((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding,
        'padding-top' : (logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#header-outer .cart-menu').stop(true,true).animate({
        'padding-bottom' : Math.ceil(((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding),
        'padding-top' : Math.ceil(((logoHeight/2) - ($('header#top nav > ul > li > a').height()/2)) + headerPadding)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('header#top nav > ul li#search-btn').stop(true,true).animate({
        'padding-bottom' : Math.floor((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2)),
        'padding-top' : Math.ceil((logoHeight/2) - ($('header#top nav > ul li#search-btn a').height()/2))
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('header#top .sf-menu > li > ul, header#top .sf-menu > li.sfHover > ul').stop(true,true).animate({
        'top' : $('header#top nav > ul > li > a').height() + (((logoHeight)/2) - ($('header#top nav > ul > li > a').height()/2))*2 + headerPadding,
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#search-outer #search-box .ui-autocomplete').stop(true,true).animate({
        'top': Math.ceil(logoHeight + headerPadding*2) +'px'
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('#search-outer, #search .container').stop(true,true).animate({
        'height' : Math.ceil(logoHeight + headerPadding*2)
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      $('#search-outer > #search input[type="text"]').stop(true,true).animate({
        'font-size'  : 43,
        'line-height' : '43px',
        'top' : ((logoHeight + headerPadding*2)/2) - 30
      },{queue:false, duration:250, easing: 'easeOutCubic'});


      $('#search-outer > #search #close a').stop(true,true).animate({
        'top' : ((logoHeight + headerPadding*2)/2) - 8
      },{queue:false, duration:250, easing: 'easeOutCubic'});

      //if no image is being used
      if(usingLogoImage == false) $('header#top #logo').stop(true,true).animate({
        'margin-top' : 4
      },{queue:false, duration:450, easing: 'easeOutExpo'});

      $(window).unbind('scroll',bigNav);
      $(window).bind('scroll',smallNav);
    }
  }
});