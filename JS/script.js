document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.top = e.clientY + (-20) + 'px';
    cursor.style.left = e.clientX + (-20) + 'px';
});

let greetingTitleContainer = document.querySelector('.greetingTitles');
let greetingTitles = greetingTitleContainer.querySelectorAll('h1');
let index = 0;

let greetingTitleInterval = setInterval(()=>{
    gsap.to(greetingTitles[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1,
        onComplete:function(){
            gsap.set(this._targets[0], {top:"100%"});
        }
    })

    index===greetingTitles.length-1?(index=0):index++;


    gsap.to(greetingTitles[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration:1,
        })
    },1500);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".fullContainer"),
    smooth: true
    });
    locoScroll.scrollTo('top');
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".fullContainer", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".fullContainer").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    document.querySelector(".goToContact").addEventListener("click",()=>{
        locoScroll.scrollTo('.footer');
    });
    document.querySelector(".goToTop").addEventListener("click",()=>{
        locoScroll.scrollTo('.fullContainer');
    });
    document.querySelector(".navAbout").addEventListener("click",()=>{
        locoScroll.scrollTo('.about');
    });
    document.querySelector(".navProjects").addEventListener("click",()=>{
        locoScroll.scrollTo('.porjects');
    });


    Shery.mouseFollower({
        // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0,
    });

    Shery.imageMasker(".projectIMG", {

        mouseFollower: true,
        text: "Shery",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.textAnimate(".heroName", {
        style: 2,
        y: 10,
        delay: 0.1,
        duration: 2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
});