$(document).ready(function () {
    $('.s-lib-profile-image')
        .closest('.s-lib-box-container')
        .addClass('full-profile-box');
    $('ul.nav').removeClass('nav-pills');
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.navbar-fixed-top').addClass('top-scrolled');
        $('body').addClass('scrolling');
        // $(".navbar-fixed-top .nav-icon-text").addClass("sr-only");
    } else {
        $('.navbar-fixed-top').removeClass('top-scrolled');
        $('body').removeClass('scrolling');
        // $(".navbar-fixed-top .nav-icon-text").removeClass("sr-only");
    }
});

/**
 * Custom Profile box on course guide
 *
 * jQuery().jquery = "1.12.4"
 */

$(document).ready(function () {
    var profileEmail = $(
        '.sherlib-course-guide .full-profile-box .s-lib-profile-email a.label-info'
    );
    var profileName = $(
        '.sherlib-course-guide .full-profile-box .s-lib-profile-name'
    );
    var bookingLink = $(
        '.sherlib-course-guide .full-profile-box .s-lib-profile-widget-other a#book-appointment'
    );
    var profileNameText = profileName.text().trim().split(' ');
    if (profileName.length > 0) {
        profileEmail.text('Email ' + profileNameText[0]);
    }
    if (bookingLink) {
        bookingLink.addClass('label label-info');
        profileEmail.parent().append(bookingLink);
    }
});