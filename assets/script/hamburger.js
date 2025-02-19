$(document).ready(function () {
    $("#nav-button").on("click", function () {
        $(".sp-nav").slideToggle();
    });
});

$('.sp-nav a[href]').on('click', function (event) {
    $('.nav-button').trigger('click');
});
