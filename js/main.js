$(function() {

    var AppPlugins = {

        /* Owl carousel*/
        owlCarousel: function() {
            $('.owl-carousel').owlCarousel({
                nav: true,
                items: 1,
                loop: true,
                center: true,
                margin: 0,
                lazyLoad: true,
                dots: true
            });
        }
    };

        /* ------ Plugins Init ------ */
        AppPlugins.owlCarousel();

});