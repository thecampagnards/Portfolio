;(function (window) {
  'use strict'

  $('.slick').slick();

  var userLang = navigator.language || navigator.userLanguage
  var lang = userLang.split('-')[0]
  if (lang !== undefined && $.inArray(lang, ['en', 'ru'])) {
    changeLang(lang)
  }

  function changeLang (area) {
    $('.btn-ru, .btn-fr, .btn-en').removeClass('active')
    $('.btn-' + area).addClass('active')
    $('span:lang(fr)').hide()
    $('span:lang(en)').hide()
    $('span:lang(ru)').hide()
    $('span:lang(' + area + ')').show()
  }

  var Areas = ['.btn-ru', '.btn-fr', '.btn-en']
  for (var i = 0; i < Areas.length; i++) {
    (function (area) {
      $(area).click(function (e) {
        e.preventDefault()
        changeLang(area.split('-')[1])
      })
    })(Areas[i])
  }

  function reverse (s) {
    return s.split('').reverse().join('')
  }

  $('.add-mail').attr('href', 'mailto:' + reverse('rf.egnaro@oknerodis.nitnatsnok'))
  $('.add-tel').attr('href', 'tel:' + reverse('22361111633+'))

  $('#formcontact').submit(function (e) {
    e.preventDefault()
    var messagediv = $('.alert')
    messagediv.find('p').text('')
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize()
    }).success(function (response) {
      messagediv.addClass('alert-success')
      messagediv.find('p').text(response.responseText)
    }).error(function (response) {
      messagediv.addClass('alert-danger')
      messagediv.find('p').text(response.responseText)
    }).fail(function (response) {
      messagediv.addClass('alert-danger')
      messagediv.find('p').text(response.responseText)
    })
  })

  $('input').on('change', function () {
    var input = $(this)
    if (input.val().length) {
      input.addClass('populated')
    } else {
      input.removeClass('populated')
    }
  })

  setTimeout(function () {
    $('#fname').trigger('focus')
  }, 500)

  var Menu = {
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },

    init: function () {
      Menu.bindUIactions()
    },

    bindUIactions: function () {
      Menu.el.ham
      .on(
        'click',
        function (event) {
          Menu.activateMenu(event)
          event.preventDefault()
          var left
          if ($('nav.nav-menu').position().left === 0) {
            left = '-100%'
          } else {
            left = 0
          }
          $('nav.nav-menu').animate({
            left: left
          }, {
            duration: 1000
          })
        }
      )
    },

    activateMenu: function () {
      Menu.el.menuTop.toggleClass('menu-top-click')
      Menu.el.menuMiddle.toggleClass('menu-middle-click')
      Menu.el.menuBottom.toggleClass('menu-bottom-click')
    }
  }

  Menu.init()

  // scroll swing pour lien sur la page
  $('.nav-menu a[href^="#"]').click(function (e) {
    e.preventDefault()
    var target = this.hash
    var $target = $(target)
    // scroll jusqu'à la cible
    $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 900, 'swing', function () {
      // changement de l'url
      window.location.hash = target
    })
    Menu.activateMenu()
    $('nav.nav-menu').animate({
      left: '-100%'
    }, {
      duration: 1000
    })
    return false
  })

/* $('.btn-ru, .btn-fr, .btn-en').click(function (e) {
    e.preventDefault()
    Menu.activateMenu()
    $('nav.nav-menu').animate({
      left: '-100%'
    }, {
      duration: 1000
    })
    return false
  }) */

  $(document).on('scroll', function () {
    var scrollPos = $(document).scrollTop()
    var refElement = $('#accueil')
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() - 60 > scrollPos) {
      $('nav .langue').switchClass('', 'big', 500)
    } else {
      $('nav .langue').switchClass('big', '', 500)
    }
  })
})(window)