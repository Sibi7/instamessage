$(document).ready(function () {
    var windowWidth = $(window).width();

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

    $(".smiles").click(function () {
        $(".smiles-list").slideToggle();
        // $(".smiles").addClass("smiles-active");

        if($(this).hasClass("smiles-active")){
          $(".smiles").removeClass("smiles-active");
        }
        else {
            $(".smiles").addClass("smiles-active");
        }


    });

    $('.add-acount').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
          function(){ // пoсле выпoлнения предъидущей aнимaции
            $('#modal_form')
              .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
              .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
      });
      /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
      $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
          .animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function(){ // пoсле aнимaции
              $(this).css('display', 'none'); // делaем ему display: none;
              $('#overlay').fadeOut(400); // скрывaем пoдлoжку
            }
          );
      });
      $(document).on('click','.tgl-btn', function () {

          if($(this).hasClass('disabled')){

            $(this).removeClass('disabled');
            $('.input__wrap_item > input').removeAttr('disabled');
          }
          else {
            $(this).addClass('disabled');
                $('.input__wrap_item > input').attr('disabled', 'disabled');
          }


      });


      jQuery(".modal__tabs_target").click(function (e) {
          jQuery(".modal__tabs_target").removeClass("modal__tabs_active");
           jQuery(this).addClass("modal__tabs_active");
           jQuery('.tab_modal__content_item').removeClass('current');

            e.preventDefault();
          var t = jQuery(this).attr('data-tab');

          jQuery(".tab_modal__content_item").fadeOut(500), jQuery("#" + t).addClass('current').fadeIn(500);

      });
      /*popup*/
      $('.image-popup-vertical-fit').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         mainClass: 'mfp-img-mobile',
         image: {
           verticalFit: true
         }

       });
      /*popup*/

});

$( "#progressbar" ).progressbar({
    value: 37
  });
