$(document).ready(() => {
      /**
       * Masonry
       */
    $('.grid__inner').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'
    });
    
    /**
       * grid css
       */
    
    $.fn.reCalWidth = function () {
        var $self = $(this);
        $self.on('reCalWidth', function () {
            var _self = $(this);
            _self.css('width', '');
            var width = Math.floor(_self.width());
            _self.css('width', width + 'px');
            var height = Math.floor(_self.parent().children('.wide').width() / 2);
            _self.parent().children('.wide').css('height', height + 'px');
        });
        $(window).on('resize', function () {
            $self.trigger('reCalWidth');
        });
    };
    function work() {
        $('.grid-css').each(function () {
            var workWrapper = $(this),
                    workContainer = $('.grid__inner', workWrapper),
                    filters = $('.filter', workWrapper),
                    filterCurrent = $('.current a', filters),
                    filterLiCurrent = $('.current', filters),
                    duration = 0.3;
            workContainer.imagesLoaded(function () {
    
                // Fix Height
                if (workWrapper.hasClass('grid-css--fixheight')) {
                    workContainer.find('.grid-item__content-wrapper').matchHeight();
                }
    
                workContainer.isotope({
                    layoutMode: 'masonry',
                    itemSelector: '.grid-item',
                    transitionDuration: duration + 's',
                    masonry: {
                        columnWidth: '.grid-sizer'
                        // hiddenStyle: {},
                        // visibleStyle: {}
                    } });
            });
            filters.on('click', 'a', function (e) {
                e.preventDefault();
                var $el = $(this);
                var selector = $el.attr('data-filter');
                filters.find('.current').removeClass('current');
                $el.parent().addClass('current');
                workContainer.isotope({
                    filter: selector
                });
            });
    
            filters.find('.select-filter').change(function () {
                var $el = $(this);
                var selector = $el.val();
                workContainer.isotope({
                    filter: selector
                });
            });
    
            $('.grid-item', workWrapper).reCalWidth();
        });
    }
    work();
    
    $('.ef-hoverdir').each(function () {
        $(this).hoverdir({
            speed: 300,
            easing: 'ease',
            hoverDelay: 40
        });
    });


    const windowH = $(window).height();

    const windowW = $(window).width();

    const aweH = $('.awe-section').height();

    const triggerPoint = windowH - 50;

    const triggerPoint2 = triggerPoint + aweH;

    const progressNumbers = ["80%", "70%", "75%", "50%", "90%","50%", "80%", "90%", "80%", "40%", "30%"];
    
    var header = $(".navbar-translate a");
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= triggerPoint || windowW >= 1200) {
                $("#progress_1").css("width", progressNumbers[0]);
                $("#progress_2").css("width", progressNumbers[1]);
                $("#progress_3").css("width", progressNumbers[2]);
                $("#progress_4").css("width", progressNumbers[3]);
                $("#progress_5").css("width", progressNumbers[4]);
                $("#progress_6").css("width", progressNumbers[5]);
                $("#progress_7").css("width", progressNumbers[6]);
                $("#progress_8").css("width", progressNumbers[7]);
                $("#progress_9").css("width", progressNumbers[8]);
                $("#progress_10").css("width", progressNumbers[9]);
                $("#progress_11").css("width", progressNumbers[10]);
            } else {

            }

            if (scroll >= triggerPoint2 || windowW >= 1200) {

                $(".title").animate({opacity: "1"}, "slow", "swing", () => {
                    $(".grid-css--masonry").animate({opacity: "1"}, "slow", "swing");
                });
            }
        });
    
});