$(document).ready(function () {
    SetLogoAnimation()
    new WOW().init()
    var lightbox = $('#how-to-start .step-img').simpleLightbox();
})

function SetLogoAnimation()
{
    let logoIcon = $(".logo-icon")
    $(".navbar-brand").hover(function () {
        if (!logoIcon.hasClass("bouncing"))
        {
            logoIcon.addClass("bouncing")
            setTimeout(function () {
                logoIcon.removeClass("bouncing")
            }, 1000)
        }
    })
}