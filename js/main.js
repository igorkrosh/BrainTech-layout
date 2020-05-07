$(document).ready(function () {
    SetLogoAnimation()
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