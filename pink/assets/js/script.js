/*global $, jQuery*/
$(document).ready(function () {
    'use strict';
    var main_navigation_opened = 0;
    $('#main-navigation-opener').click(function () {
        if (main_navigation_opened === 0) {
            $('.main-navigation a').css('display', 'inline');
            $('#main-navigation-opener').css('background-image', 'url(assets/img/menu-cross.png)');
            $('.main-header').css('background-color', '#283645');
            $('.main-header').css('background-image', 'none');
            main_navigation_opened = 1;
        } else {
            $('.main-navigation a').css('display', 'none');
            $('#main-navigation-opener').css('background-image', 'url(assets/img/menu-burger.png)');
            $('.main-header').css('background-color', 'transparent');
            $('.main-header').css('background-image', 'url(assets/img/header-layer.png)');
            main_navigation_opened = 0;
        }
    });
});