//CONTADOR DE NÚMEROS

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


//HEADER SROLL

var oS = 0;

$(document).scroll(() => {
    var sT = $(document).scrollTop();
    var sY = window.scrollY;

    if (sT == 0) {
        $('header').removeClass('_re')
    } else {
        $('header').addClass('_re')
    }

    if (sT !== 0) {
        $("header").addClass("_hi");
        $(".scroll_icon").addClass("_hi");
    } else {
        $("header").removeClass("_hi");
        $(".scroll_icon").removeClass("_hi");
    }

    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && oS <= currentScroll) {
        oS = currentScroll;
        nivFollow(false);
    } else {
        $("header").removeClass("_hi");
        oS = currentScroll;
        nivFollow(true);

    }

})

var empty;

(function ($) {
    $.fn.showModal = function () {
        $(this).attr('show', '');

        return this;
    }


    $.fn.hideModal = function () {
        $(this).removeAttr('show');
        return this;
    }

})(jQuery);

$('.modal .close-modal').click(function () {
    $($(this).closest('.modal')).hideModal()
})


$('.modal button.cancel').click(function () {
    $($(this).closest('.modal')).hideModal()
})
// NIV-FADE

$(document).ready(() => {
    $("section.hero [niv-fade]").removeAttr("niv-fade");

    $(".backdrop").attr('hide', '');

    setTimeout(() => {
        $("body").toggleClass('overflow');
        $("header").toggleAttr('starting', '');
    }, 500);

    var i = 0;
    $(document).scroll(() => {
        $("[niv-fade]").each(function () {
            if (
                $(document).scrollTop() >=
                $(this).closest("div.niv").offset().top -
                ($(window).height() * 3) / 4
            ) {
                $(this).removeAttr("niv-fade");
            }
        });

        if (
            $(document).scrollTop() >=
            $('section.missao#missao div.niv').offset().top -
            ($(window).height() * 3) / 4

            &&

            $(document).scrollTop() <=
            $('section.missao#missao div.niv').offset().top + $('section.missao#missao div.niv').height()
        ) {

            $('header div[fluid] div.niv nav ul li').removeAttr('active');
            $('header div[fluid] div.niv nav ul li:nth-child(2)').attr('active', '');
        }
        else if (
            $(document).scrollTop() >=
            $('section.lojas#lojas div.niv').offset().top -
            ($(window).height() * 3) / 4

            &&

            $(document).scrollTop() <=
            $('section.lojas#lojas div.niv').offset().top + $('section.lojas#lojas div.niv').height()
        ) {
            $('header div[fluid] div.niv nav ul li').removeAttr('active');
            $('header div[fluid] div.niv nav ul li:nth-child(3)').attr('active', '');
        }
        else if (
            $(document).scrollTop() >=
            $('section.contato#contato div.niv').offset().top -
            ($(window).height() * 3) / 4
        ) {
            $('header div[fluid] div.niv nav ul li').removeAttr('active');
            $('header div[fluid] div.niv nav ul li:nth-child(4)').attr('active', '');
        }
        else if (
            $(document).scrollTop() <=
            $('section.missao#missao div.niv').offset().top -
            ($(window).height() * 3) / 4
        ) {
            $('header div[fluid] div.niv nav ul li').removeAttr('active');
            $('header div[fluid] div.niv nav ul li:nth-child(1)').attr('active', '');
        }
    })
})





$(document).ready(() => {

    // SET
    $('[niv-follow]').each(function () {
        var min = $(this).attr('niv-follow').split('-')[0];
        var max = $(this).attr('niv-follow').split('-')[1];

        $(this).css('transform', `translateY(${min}px)`);
    })


})



function nivFollow(scrollDirection) {
    $('[niv-follow]').each(function () {
        var min = $(this).attr('niv-follow').split('-')[0];
        var atual = parseInt($(this).css('transform').split(',')[5]);
        var max = $(this).attr('niv-follow').split('-')[1];

        var statementUP = atual > min ? true : false;
        var statementDOWN = atual < max ? true : false;

        if (!($(document).scrollTop() >=
            $(this).closest('div.niv').offset().top -
            ($(window).height() * 3) / 4)) return false;

        if (!scrollDirection) {
            if (statementDOWN) {
                $(this).css('transform', `translateY(${atual + 20}px)`);
            }
        }
        else {
            if (statementUP) {
                $(this).css('transform', `translateY(${atual - 40}px)`);
            }
        }
    })
}

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });



$('form label input[name = "telefone"]').mask("(00) 00000-0000");
$('form label input[name = "expiracao"]').mask("00/0000");
$('form label input[name= "numero"]').mask("0000 0000 0000 0000");

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

console.log("%c👋 Opa, bom dia!\n%cEstá perdido? a estrada é pelo %coutro lado!!\n%cMas já que já está aqui, da uma olhadinha no nosso site\n%chttps://hyp8.com.br ✨", "font-family: consolas;", "font-family: consolas;", "font-family: consolas; font-weight: bold;color: red;", "font-family: consolas;", "font-family: consolas; color:$FF3434; ")



// MODALS

setTimeout(() => {
    $('.modal_box').showModal()
}, 3000);



(function ($) {
    $.fn.toggleAttr = function (attr) {
        if ($(this).attr(attr) == '') {
            $(this).removeAttr(attr)
        } else {
            $(this).attr(attr, '')
        }
        return this;
    }

})(jQuery);


//SETAR CLICKS

$(document).ready(function () {
    $('header div[fluid] div.niv .mobile').click(() => {
        $('header div[fluid].--menu').toggleAttr('active');
        $('header div[fluid] div.niv .mobile').toggleAttr('active');
    })

    $('header div[fluid] div.niv nav ul li').click(() => {
        $('header div[fluid].--menu').removeAttr('active');
        $('header div[fluid] div.niv .mobile').removeAttr('active');
    })

    $('section.missao div.niv div.niv-nav ul li').click(function () {
        var index = $(this).index();
        $('section.missao div.niv div.niv-nav ul li').removeAttr('active');
        $('section.missao div.niv div.niv-picture picture').removeAttr('active');
        $('section.missao div.niv div.niv-text span').removeAttr('active');


        $($(`section.missao div.niv div.niv-text span`)[index]).attr('active', '');
        $($(`section.missao div.niv div.niv-picture picture`)[index]).attr('active', '');
        $(this).attr('active', '');
    })

    $('header div[fluid] div.niv nav ul li').click(function () {
        $('header div[fluid] div.niv nav ul li').removeAttr('active');
        $(this).attr('active', '')
    })
})


