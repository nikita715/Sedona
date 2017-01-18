/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    'use strict';
    var mainNavCondition;
    $('.main-nav-opener').click(function () {
        if (mainNavCondition === 0 || mainNavCondition === undefined) {
            $(".page-header").css("margin-top", $(".main-nav").css("height"));
            mainNavCondition = 1;
        } else {
            $(".page-header").css("margin-top", 0);
            mainNavCondition = 0;
        }
    });
    $('.main-nav-closer').click(function () {
        if (mainNavCondition === 0 || mainNavCondition === undefined) {
            $(".page-header").css("margin-top", $(".main-nav").css("height"));
            mainNavCondition = 1;
        } else {
            $(".page-header").css("margin-top", 0);
            mainNavCondition = 0;
        }
    });
});