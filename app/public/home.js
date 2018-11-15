
if ( window.innerWidth > 1000 ) {

    TweenMax.to(".landing-page", 2.0, 
        {
            transformOrigin: "100% 100%",
            ease: Bounce.easeOut, 
            yPercent: 50,
            skewY: -2,
            xPercent: -1.0
        }
    )   
} else if ( window.innerWidth > 650 ) {

    TweenMax.to(".landing-page", 2.0, 
        {
            transformOrigin: "100% 100%",
            ease: Bounce.easeOut, 
            yPercent: 30,
            skewY: -2,
            xPercent: -1.0
        }
    ) 
} else {

    TweenMax.to(".landing-page", 2.0, 
        {
            transformOrigin: "100% 100%",
            ease: Bounce.easeOut, 
            yPercent: 20,
            skewY: -2,
            xPercent: -1.0
        }
    ) 
}


