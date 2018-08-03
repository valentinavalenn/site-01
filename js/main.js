$(document).ready(function () {
    $('.burger-menu').on('click', function(e){
        $('.menu-items').toggleClass("dropdown-active");
        e.stopPropagation();
    })

    $('html').on('click', function(){
        $('.menu-items').removeClass("dropdown-active");
    })

    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});