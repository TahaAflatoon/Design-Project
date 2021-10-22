/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    // Close button
    $('.closebtn').click(function() {
        $('.header').slideUp(500)
    }),
    // Open button
    $('.openbtn').click(function() {
        $('.header').slideDown(500)
    })
});

// JavaScript
