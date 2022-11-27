(function (window, document, $, undefined) {
    var $slides, $btnArr;

    function onClick(e) {
        var $target = $(e.target);
        if ($target.hasClass('sc_slide') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
            $target.removeClass('anim-in last-viewed').addClass('active')
            $target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');
        }
    }

    function closeSlide(e) {
        var $slide = $(e.target).parent();
        $slide.removeClass('active anim-in').addClass('last-viewed');
        $slide.siblings().removeClass('anim-out').addClass('anim-in');
    }

    $(function () {
        $slides = $('.sc_slide');
        $btnArr = $slides.find('.btn-close');
        $slides.on('click', onClick);
        $btnArr.on('click', closeSlide);
    });
})(this, document, jQuery);