"use strict";

$(function () {
  //--------------------------------------- header burger
  $('.header__burger').click(function () {
    $(this).toggleClass('active');
    $('.menu-list').slideToggle();

    if ($(this).hasClass('active')) {
      $('body').data('scroll', $(window).scrollTop());
    }

    $('body').toggleClass('lock');

    if (!$(this).hasClass('active')) {
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
  }); //--------------------------------------- popup

  $('.catalog__item-btn').on('click', function () {
    $('.modal__overlay').css('display', 'flex');
  });
  $('.modal-close').on('click', function () {
    $('.modal__overlay').css('display', 'none');
  });
  $('#close').on('click', function (e) {
    e.preventDefault();
    $('.modal__overlay').css('display', 'none');
  }); //--------------------------------------- tabs

  $('.catalog__tabs .btn').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.catalog__tabs .btn').removeClass('active');
      $(this).addClass('active');
    }

    if ($(this).attr('id') == 'everyday') {
      $('.catalog__everyday').show();
      $('.catalog__ero').hide();
    } else if ($(this).attr('id') == 'ero') {
      $('.catalog__everyday').hide();
      $('.catalog__ero').show();
    }
  }); //---------------------------------------iakor scroll

  $('.offer__btns a').on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 1000);

    if ($(this).attr('id') == 'offer-everyday') {
      $('.catalog__everyday').show();
      $('.catalog__ero').hide();
      $('#everyday').addClass('active');
      $('#ero').removeClass('active');
    } else if ($(this).attr('id') == 'offer-ero') {
      $('.catalog__everyday').hide();
      $('.catalog__ero').show();
      $('#everyday').removeClass('active');
      $('#ero').addClass('active');
    }
  });
  objectFitImages();
});