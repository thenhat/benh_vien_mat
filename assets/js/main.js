jQuery.fn.exists = function () {
    return this.length > 0;
};

var main = {
    ScrollToTop: function () {
        $("#scroll-top").click(function () {
            $("html, body").animate({scrollTop: 0}, "slow");
            return false;
        });
    },
    SliderHomePage: function () {
        $('.slider-banner').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            dots: false
        });

        $('.slider-video').owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            items: 4,
            dots: true
        });

        $('.slider-doctor').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            items: 4,
            dots: true,
            dotData: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
        var i = 1;
        $('.slider-doctor .owl-dot span').each(function () {
            $(this).text(i);
            i++;
        });
        $('.slider-gallery').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 3,
            dots: true,
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 4
                },
                900: {
                    items: 3
                }
            }
        });

        $('.slider-partner').owlCarousel({
            loop: true,
            margin: 8,
            nav: false,
            items: 3,
            dots: true
        });

        $('.slider-gioithieu').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            items:8,
            dots:false,
            responsive:{
                0:{
                    items:4
                },
                600:{
                    items:6
                },
                1000:{
                    items:6
                }
            }
        });
    },
    Model: function () {
        $('#model-ads').modal('show');
    },
    ATTR_VIDEO: function () {
        $(".attr_sld").click(function(){
            var self = $(this);
            var dataSrc = self.attr("data-src");
            var dataTitle = self.attr("data-title");

            $(".video-news-thumbs .thumbs-url").attr("src",dataSrc);
            $(".video-news-thumbs .thumbs-title").html(dataTitle);

        });
    },
    Start: function () {
        this.ScrollToTop();
        this.SliderHomePage();
        this.Model();
        this.ATTR_VIDEO();
    }
};
$(document).ready(function () {
    main.Start();
});




