/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    $('.closebtn').click(function() {
        $('.header').slideUp(500)
    }),
    $('.openbtn').click(function() {
        $('.header').slideDown(500)
    })
});

/*JavaScript*/
