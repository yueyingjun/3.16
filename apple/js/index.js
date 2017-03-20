$(function () {
    $('.smallMenu').click(function () {
        $(".smallNav-bottom").slideToggle()
    })
    $(".ulItem .fr").click(function () {
        $(this).parents(".smallfooterItem").find("ul").slideToggle();
    })
})