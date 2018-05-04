$('.scroll').on('click', function() {
    $(window).scrollTop(600);
    $(this).addClass('active').siblings().removeClass('active')
})
$('.top').on('click', function() {
    $(window).scrollTop(0);
    $(this).addClass('active').siblings().removeClass('active')
})