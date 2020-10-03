$(document).ready(function() {

    // Controller
    var controller = new ScrollMagic.Controller({ loglevel: 3 });

    // Set Variables
    TweenMax.set(".grid-item .image", { perspective: 500 });
    TweenMax.set(".grid-item .image .overlay", { z: 150 })
    TweenMax.set(".grid-item .image .content h2", { z: 151, autoAlpha: 0 })
    TweenMax.set(".grid-item .image .content .register", { z: 151, autoAlpha: 0 })
        // grid-item with effect-first
    var timelineEffectFirst = new TimelineMax({ paused: true });
    timelineEffectFirst.fromTo('.effect-first .image .overlay', 1, { skewX: -10, scale: 1.15 }, { delay: 1, skewX: 20, xPercent: 85, transformOrigin: "0% 100%", ease: Power2.easeOut })
        .from(".effect-first .image img", 1, { z: 100, transformOrigin: "50% 0%", ease: Power3.easeOut }, '-=1')
        .fromTo('.effect-first .content > h2', 0.75, { autoAlpha: 0, x: -128 }, { autoAlpha: 1, x: 0 }, '-=0.75')
        .fromTo('.effect-first .content  .register', 0.75, { autoAlpha: 0, x: -128 }, { autoAlpha: 1, x: 0 }, '-=0.75');;

    new ScrollMagic.Scene({ triggerElement: '.effect-first', triggerHook: 'onEnter', offset: 60 })
        .addTo(controller)
        .setTween(timelineEffectFirst.play());

})