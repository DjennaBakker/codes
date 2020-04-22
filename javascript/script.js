window.onload = function() {
    TweenMax.to('.hero', 1.5, {scaleY: 1, height:'600px', ease: Circ.easeOut });
    TweenMax.to('.box1', 2, {opacity: 1, scale: 1, delay: 1, ease: Elastic.easeOut.config(1, 0.4)});
    TweenMax.to('.box2', 2, {opacity: 1, scale: 1, delay: 1.4, ease: Elastic.easeOut.config(1, 0.4)});
    TweenMax.to('.box3', 2, {opacity: 1, scale: 1, delay: 1.8, ease: Elastic.easeOut.config(1, 0.4)});
    TweenMax.to('h1', 1, {opacity: 1, y: 20, delay: 1.4});
    TweenMax.to('.djenna', 1, {opacity: 1, delay: 1.4});

    TweenLite.to('.box1', 2, {rotation:-9});
    TweenLite.to('.box2', 2, {rotation:30});
    TweenLite.to('.box3', 2, {rotation:60});
}

