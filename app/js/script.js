$(document).ready(function () {
    var windowWidth = $(window).width();

    $(".toggle_mnu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    if (windowWidth < 769) {
        $(".header__menu ul a").click(function () {
            $(".header__menu").fadeOut(600);
            $(".sandwich").toggleClass("active").append("<span>");
        });

        $(".toggle_mnu").click(function () {
            if ($(".header__menu").is(":visible")) {
                $(".header__menu").fadeOut(600);

                $(".header__menu li a").removeClass("fadeInUp animated");
            } else {
                $(".header__menu").fadeIn(600);

                $(".header__menu li a").addClass("fadeInUp animated");
            }
        });
    }

    $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*sidebar*/
    //  $(".sidebar").sticky({topSpacing:0});
    /*sidebar*/
    /*tabs*/
    jQuery(".page__tabs_target").click(function (e) {
        jQuery(".page__tabs_target").removeClass("page__tabs_active");
        jQuery(this).addClass("page__tabs_active");
        jQuery('.tab__content_item').removeClass('current');

        e.preventDefault();
        var t = jQuery(this).attr('data-tab');

        jQuery(".tab__content_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);

    });
    /*tabs*/

    $(".tab__content_item > .user__row").click(function () {

        if ($(".hide__sidebar").is(":visible")) {
            $(".hide__sidebar").removeClass("hide__sidebar_active");
            $(".dialog").removeClass("dialog__small");
            // $(this).removeClass('user-active');
        } else {
            $(".hide__sidebar").addClass("hide__sidebar_active");
            $(".dialog").addClass("dialog__small");
            $('.tab__content_mobile').hide();

        }
        if (!$(this).hasClass('user-active')) {
            $('.tab__content_item > .user__row.user-active > .user-active-akk').hide();
            $('.tab__content_item > .user__row').removeClass('user-active');
            $(this).addClass('user-active');
            $(this).find('.user-active-akk').show();



        }


    });
    $(".user__rows").click(function () {
        if ($(".hide__sidebar_mob").is(":visible")) {
            $(".hide__sidebar_mob").removeClass("hide__sidebar_mob_active");
            $(".account__wrap").removeClass("account__wrap_min");
            // $(".dialog").removeClass("dialog__small");
        } else {
            $(".hide__sidebar_mob").addClass("hide__sidebar_mob_active");
            $(".account__wrap").addClass("account__wrap_min");
            // $(".dialog").addClass("dialog__small");

        }
    });
    $(".settings-botton").click(function () {
        $(".setting-list").slideToggle();
    });

    $(document).on('click', '.tab__nav_mobile > ul > li', function () {
        event.preventDefault();
        $('.tab__content_mobile').removeAttr('style');
        $('.hide__sidebar').removeClass('hide__sidebar_active');
        if (!$(this).hasClass('active')) {
            var tab = $(this).data('tab');
            $('.tab__nav_mobile > ul > li').removeClass('active');
            $(this).addClass('active');
            $('.tab__content_mobile_item').hide();
            $('.tab__content_mobile_item[data-tab="'+ tab +'"]').show();
        } else {
            if ( $('.sidebar').hasClass('minifed')) {
                $('.sidebar').removeClass('minifed');
                $('.sidebar__logo').show();
                $('.sidebar__logo_mobile').hide();
                // $('.tab__content_mobile').css( 'width', '-=180px' );
            } else {
                $('.sidebar').addClass('minifed');
                $('.sidebar__logo').hide();
                $('.sidebar__logo_mobile').show();
                // $('.tab__content_mobile').css( 'width', '+=180px' );
            }
        }
    });
    $(document).on('click', '.extend-btn', function () {
        event.preventDefault();
        $('.tab__content_mobile').removeAttr('style');
        $('.hide__sidebar').removeClass('hide__sidebar_active');
        if (!$(this).hasClass('active')) {
            var tab = $(this).data('tab');
            $('.tab__nav_mobile > ul > li').removeClass('active');
            $(this).addClass('active');
            $('.tab__content_mobile_item').hide();
            $('.tab__content_mobile_item[data-tab="'+ tab +'"]').show();
        } else {
            if ( $('.sidebar').hasClass('minifed')) {
                $('.sidebar').removeClass('minifed');
                $('.sidebar__logo').show();
                $('.sidebar__logo_mobile').hide();
                // $('.tab__content_mobile').css( 'width', '-=180px' );
            } else {
                $('.sidebar').addClass('minifed');
                $('.sidebar__logo').hide();
                $('.sidebar__logo_mobile').show();
                // $('.tab__content_mobile').css( 'width', '+=180px' );
            }
        }
    });
    $(document).on('click', '.tab__content_item > ul > li', function () {
        event.preventDefault();
        $('.tab__nav_mobile').removeAttr('style');
        $('.hide__sidebar').removeClass('hide__sidebar_active');
        $(".dialog").hide();
        $('.tab__content_mobile').show();
         var tab = $(this).data('tab');
         $('.tab__content_item > ul > li').removeClass('active');
         $(this).addClass('active');
         $('.tab__content_mobile_item').hide();
         $('.tab__content_mobile_item[data-tab="'+ tab +'"]').show();
    });

    $(document).on('click', '.sidebar__logo_mobile', function () {
        $('.sidebar').removeClass('minifed');
        $('.sidebar__logo').show();
        $('.sidebar__logo_mobile').hide();
        $('.tab__content_mobile').removeAttr('style');
        //$('.tab__content_mobile').css( 'width', '-=180px' );
        $('.hide__sidebar').removeClass('hide__sidebar_active');
    });

    $(document).on('click', '.tab__content_mobile_item > .user__row', function () {
        event.preventDefault();
        // $('.tab__content_mobile').css( 'width', '235px' );

        if (!$('.sidebar').hasClass('minifed')) {
            $('.sidebar').addClass('minifed');
            $('.sidebar__logo').hide();
            $('.sidebar__logo_mobile').show();
        }

        if (!$(this).hasClass('user-active')) {
            $('.tab__content_mobile_item > .user__row.user-active > .user-active-akk').hide();
            $('.tab__content_mobile_item > .user__row').removeClass('user-active');
            $(this).addClass('user-active');
            $(this).find('.user-active-akk').show();
              $(".tab__content_mobile").show();
            $('.hide__sidebar').addClass('hide__sidebar_active');
           var sidebarW = windowWidth - 533;
             $('.tab__content_mobile').css('width', sidebarW + 'px');

        }

    });

    $(document).on('click', '.hide__sidebar_user', function () {
        event.preventDefault();

        if (!$(this).hasClass('hide__sidebar_user_active')) {
            $('.hide__sidebar_user').removeClass('hide__sidebar_user_active');
            $(this).addClass('hide__sidebar_user_active');
            $('.dialog').show();
        }
    });

    $(document).on('click', '.close-icon', function () {
        event.preventDefault();
        $('.dialog').hide();
    });

    if (windowWidth < 750) {

      $(document).on('click', '.tab__nav_mobile>ul>li', function () {
          event.preventDefault();
          // $('.tab__content_mobile').css( 'width', '235px' );

          if (!$('.sidebar').hasClass('minifed')) {
              $('.sidebar').addClass('minifed');
              $('.sidebar__logo').hide();
              $('.sidebar__logo_mobile').show();
          }

          if (!$(this).hasClass('user-active')) {
              $('.tab__content_mobile_item > .user__row.user-active > .user-active-akk').hide();
              $('.tab__content_mobile_item > .user__row').removeClass('user-active');
              $(this).addClass('user-active');
              $(this).find('.user-active-akk').show();

              // $('.hide__sidebar').addClass('hide__sidebar_active');
              // var sidebarW = windowWidth - 321;
              // $('.hide__sidebar').css('width', sidebarW + 'px');

          }
      });

      $(document).on('click', '.tab__content_mobile_item > .user__row', function () {
          event.preventDefault();
          // $('.tab__content_mobile').css( 'width', '235px' );

          // if (!$('.sidebar').hasClass('minifed')) {
          //     $('.sidebar').addClass('minifed');
          //     $('.sidebar__logo').hide();
          //     $('.sidebar__logo_mobile').show();
          // }
          $(".tab__content_mobile").hide();
          if (!$(this).hasClass('user-active')) {
              $('.tab__content_mobile_item > .user__row.user-active > .user-active-akk').hide();
              $('.tab__content_mobile_item > .user__row').removeClass('user-active');
              $(this).addClass('user-active');
              $(this).find('.user-active-akk').show();

              // $('.hide__sidebar').addClass('hide__sidebar_active');
              // var sidebarW = windowWidth - 500;
              // $('.hide__sidebar').css('width', sidebarW + 'px');

          }
      });
        $(document).on('click', '.arrow-back', function () {
          $('.hide__sidebar').removeClass('hide__sidebar_active');
          $('.tab__content_mobile').css("width", "300").show();


        });

          $(document).on('click', '.tarif__wrap_item .title', function () {
            $(this).next('.tarif__content').slideToggle();
          });

    }

});

$( "#progressbar" ).progressbar({
    value: 37
  });
