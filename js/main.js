$(document).ready(function(){
    $('.hamburger').click(function() {
        $('.main-menu').toggleClass('open');
    });


    $('.main-menu-item a').click(function(e) {
        e.preventDefault();
        console.log('click on link');

        $('body').fadeOut(2000, function (){
            window.location.href = $(e.target).attr('href');
        });    
    });
});