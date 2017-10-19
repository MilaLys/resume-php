$(document).ready(function () {

    // Menu
   
$('.inner-list').click(function(){

    if ($(this).children().is('ul:visible')) {
        $(this).find('ul').css('display', 'none');
    } else {
        $('.inner-list ul').hide();
        $(this).find('ul').css('display', 'block');
    }

});


    // Open & hide menu
    $(".mobile-menu").click(function () {
        $(".sidebar").toggle();
    });

    // Resize menu
    function resizeMenu() {
        $(".menu").height($(window).height() - $("header").height());
        if ($(window).width() > 1024) {
            $(".sidebar").show();
        }
    }

    $(window).resize(resizeMenu);
    resizeMenu();

    // Scrollbar
    (function ($) {
        $(window).on("load", function () {
            $(".sidebar").mCustomScrollbar({
                theme: "light-thick"
            });
        });
    })(jQuery);

    // Scrolling up
    var scrollUpVisible = false;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > $(window).height() && !scrollUpVisible) {
            $("#scrollUp").fadeIn(1000);
            scrollUpVisible = true;
        }
        if (scroll < $(window).height() && scrollUpVisible) {
            $("#scrollUp").fadeOut(1000);
            scrollUpVisible = false;
        }
    });
    $("#scrollUp").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    });
    if ($(window).scrollTop() > $(window).height()) {
        $("#scrollUp").show();
    }

    // Refresh
    $(function () {
        $('[data-widget="refresh"]').on('click', function (event) {
            var $modal = $('<div class="widget-modal"></div>');
            var $target = $(this).parents('.dashboard-panel');

            $target.append($modal);

            setTimeout(function () {
                $modal.remove();
            }, 2000);

            event.preventDefault();
        });
    });

    $(".cog").click(function () {
        $('.toggle-panel').toggle();

    });
});
