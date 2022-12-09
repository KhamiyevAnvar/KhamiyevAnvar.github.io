// Page onload - loading
window.onload = () => {
    setTimeout(onloadPage, 1000);
}
function onloadPage() {
    document.getElementsByClassName("onloadPage")[0].classList.add("onloadPageNone");
}

const mirror_banner_video = document.getElementById("mirror_banner_video");
const mirror_banner_videoImg = document.getElementById("mirror_banner_videoImg");
const scroller_video = document.querySelectorAll(".scroller_video");
const scroller_videoImg = document.querySelectorAll(".scroller_videoImg");

const led_video = document.querySelectorAll(".led_video");
const led_videoImg = document.querySelectorAll(".led_videoImg");
function BrowserDetection() {

    //Check if browser is Safari, if it is, hide the <video> tag, otherwise hide the <img> tag
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        mirror_banner_video.style.display = "none";


        for (let i = 0; i < scroller_video.length; i++) {
            scroller_video[i].style.display = "none";

            console.log("safari scroller");
        }
        for (let l = 0; l < led_video.length; l++) {
            led_video[l].style.display = "none";

            console.log("safari1 led1");
        }
    } else {
        mirror_banner_videoImg.style.display = "none";

        for (let i = 0; i < scroller_video.length; i++) {
            scroller_videoImg[i].style.display = "none";

            console.log("not safari scroller");
        }
        for (let l = 0; l < led_videoImg.length; l++) {
            led_videoImg[l].style.display = "none";

            console.log("not safari1 led1");
        }
    }
    //And run the script. Note that the script tag needs to be run after HTML so where you place it is important. 
}

BrowserDetection();


// canvas video
// let mir_video, mir_can_video, ctx_mir_can_video, c_tmp, ctx_tmp;
// function inite() {
//     mir_video = document.getElementById("mirror_banner_video");
//     mir_can_video = document.getElementById("mirror_banner_video_canvas");
//     ctx_mir_can_video = mir_can_video.getContext("2d");

//     function updateCanvas() {
//         ctx_mir_can_video.drawImage(mir_video, 0, 0, mir_can_video.width, mir_can_video.height);

//         window.requestAnimationFrame(updateCanvas);
//     }

//     requestAnimationFrame(updateCanvas);
// }

// document.addEventListener("DOMContentLoaded", () => {
//     inite();
// })

// Full page management
new fullpage('#fullpage', {
    // navigation: true,
    scrollingSpeed: 1500,
    controlArrows: false,
    slidesNavigation: true,
    anchors: ['section1', 'section2', "section3", "section4", "section5", "section6"],
    // navigationTooltips: ['', 'SCROLLER', 'LED MONİTOR', 'PRİZMA VƏ BİLLBOARD'],
    // showActiveTooltip: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        // partner name animation
        const title = section.querySelectorAll('.partner-name');
        const tl = new TimelineMax({ delay: 0.7 });
        tl.fromTo(title, 1, { y: "-50", opacity: 0 }, { y: 0, opacity: 1 });

        // mirror pdf animation
        const mirrorPdf = section.querySelectorAll('.mirror_pdf');
        const tlPdf = new TimelineMax({ delay: 1 });
        tlPdf.fromTo(mirrorPdf, 0.8, { y: "200", opacity: 0 }, { y: 0, opacity: 1 });


        const statisticsSection = document.querySelectorAll('.statistics-section')[0];
        const backToTop = document.querySelector('#back_to_top');

        // banner video
        const mirror_banner_video = document.getElementById("mirror_banner_video");

        if (destination.index !== 0) {
            backToTop.style.opacity = 1;
            mirror_banner_video.pause();
            // mirror_banner_videoImg.pause();
        }

        if (destination.index === 0) {
            backToTop.style.opacity = 0;
            mirror_banner_video.play();
            // mirror_banner_videoImg.play();
        }

        // scroller_video
        // const scroller_video = document.querySelectorAll(".scroller_video");
        // mirror scroller 
        // const mirror_scroller = document.getElementsByClassName("mirror_scroller")[0];
        if (destination.index === 1) {
            // play scroller_video
            // for (let s = 0; s < scroller_video.length; s++) {
            //     scroller_video[s].play();
            // }


            // mirror_scroller animation

            // const mirror_scroller1 = new TimelineMax({ delay: 0.8 });
            // mirror_scroller1.fromTo(mirror_scroller, 1.5, { y: -2000 }, { y: 0 });
        } else {
            // pause scroller_video
            // for (let s = 0; s < scroller_video.length; s++) {
            //     scroller_video[s].pause();
            // }
        }
        if (destination.index !== 1) {


        }

        //led video
        // const led_video = document.querySelectorAll(".led_video");
        if (destination.index === 2) {

            // // play scroller_video
            // for (let l = 0; l < led_video.length; l++) {


            //     led_video[l].load();
            //     led_video[l].play();
            //     console.log("1")


            // }

            const ledSectionHeadItem1 = section.querySelectorAll('.ledSectionHeadItem1');
            const ledSectionHeadItem2 = section.querySelectorAll('.ledSectionHeadItem2');
            const ledSectionHeadItem3 = section.querySelectorAll('.ledSectionHeadItem3');
            const ledSectionBottomItem1 = section.querySelectorAll('.ledSectionBottomItem1');
            const ledSectionBottomItem2 = section.querySelectorAll('.ledSectionBottomItem2');
            const ledSectionBottomItem3 = section.querySelectorAll('.ledSectionBottomItem3');

            const tlLed1 = new TimelineMax({ delay: 0.5 });
            const tlLed2 = new TimelineMax({ delay: 0.5 });
            const tlLed3 = new TimelineMax({ delay: 0.5 });
            const tlLed4 = new TimelineMax({ delay: 0.5 });
            const tlLed5 = new TimelineMax({ delay: 0.5 });
            const tlLed6 = new TimelineMax({ delay: 0.5 });

            tlLed1.fromTo(ledSectionHeadItem1, 1.4, { x: "-2000" }, { x: 0 });
            tlLed2.fromTo(ledSectionHeadItem2, 1.6, { y: "-2000" }, { y: 0 });
            tlLed3.fromTo(ledSectionHeadItem3, 1.5, { x: "2000" }, { x: 0 });
            tlLed4.fromTo(ledSectionBottomItem1, 1.9, { x: "-2000" }, { x: 0 });
            tlLed5.fromTo(ledSectionBottomItem2, 1.8, { y: "2000" }, { y: 0 });
            tlLed6.fromTo(ledSectionBottomItem3, 1.7, { x: "1000" }, { x: 0 });
        } else {
            // pause scroller_video
            // for (let l = 0; l < led_video.length; l++) {
            //     led_video[l].pause();

            // }
        }

        if (destination.index !== 2) {


        }

        if (destination.index !== 3) {

        }

        if (destination.index === 3) {
            const prizmaName = section.querySelectorAll('.prizmaName');
            const prizma_Head1 = section.querySelectorAll('.prizma_Head1');
            const prizma_Head2 = section.querySelectorAll('.prizma_Head2');
            const prizma_Head3 = section.querySelectorAll('.prizma_Head3');
            const prizma_Bottom1 = section.querySelectorAll('.prizma_Bottom1');
            const prizma_Bottom2 = section.querySelectorAll('.prizma_Bottom2');
            const prizma_Bottom3 = section.querySelectorAll('.prizma_Bottom3');

            const tlprizma1 = new TimelineMax({ delay: 0.8 });
            const tlprizma2 = new TimelineMax({ delay: 0.8 });
            const tlprizma6 = new TimelineMax({ delay: 0.8 });
            const tlprizma3 = new TimelineMax({ delay: 0.8 });
            const tlprizma4 = new TimelineMax({ delay: 0.8 });
            const tlprizma5 = new TimelineMax({ delay: 0.8 });

            const tlprizmaname1 = new TimelineMax({ delay: 0.5 });

            tlprizma1.fromTo(prizma_Head1, 1.4, { x: "-2000" }, { x: 0 });
            tlprizma2.fromTo(prizma_Head2, 1.6, { y: "-2000" }, { y: 0 });
            tlprizma6.fromTo(prizma_Head3, 1.5, { x: "2000" }, { x: 0 });

            tlprizma3.fromTo(prizma_Bottom1, 1.5, { x: "-2000" }, { x: 0 });
            tlprizma4.fromTo(prizma_Bottom2, 1.6, { y: "2000" }, { y: 0 });
            tlprizma5.fromTo(prizma_Bottom3, 1.4, { x: "2000" }, { x: 0 });

            tlprizmaname1.fromTo(prizmaName, 1.3, { scale: 0 }, { scale: 1 });

        }

        if (destination.index !== 4) {

            // statistics animation out
            statisticsSection.classList.remove("statistics-section-animation");
        }

        if (destination.index === 4) {

            // statistics animation in
            statisticsSection.classList.add("statistics-section-animation");

            // numscroller statistic
            const allNums = document.querySelectorAll('.numscroller');
            for (let allNumsZeroCount = 0; allNumsZeroCount < allNums.length; allNumsZeroCount++) {
                allNums[allNumsZeroCount].innerText = 0;
            }


            function numscroller(singleScroller) {
                let num = 0;
                let dataMax = singleScroller.getAttribute("data-max");
                let dataIncrement = singleScroller.getAttribute("data-increment");
                var scrolTimeout = setTimeout(function () {

                    var numscrol = setInterval(function () {
                        if (num >= dataMax) {
                            singleScroller.innerText = dataMax;
                            clearInterval(numscrol);
                            return;

                        }
                        else {
                            singleScroller.innerHTML = num;
                            num += parseInt(dataIncrement);
                        }


                    }, 80);
                    clearTimeout(scrolTimeout);
                }, 1000);
            }

            for (let numscrolIndex = 0; numscrolIndex < allNums.length; numscrolIndex++) {
                numscroller(allNums[numscrolIndex]);
            }
        }

        const partner = document.getElementsByClassName("partner")[0];
        if (destination.index === 5) {
            const partner1 = new TimelineMax({ delay: 0.8 });
            partner1.fromTo(partner, 2, { scale: 0 }, { scale: 1 });
        }

        if (destination.index === 6) {
        }
    }
});


// menu
var phoneNavMenu = document.getElementById('mirror_phone_menu');

// ham svg add animation
const ham = document.getElementById("navbar_menu_button_ham");
ham.onclick = function () {
    this.classList.toggle("active");
    phoneNavMenu.classList.toggle("mirror_phone_menu_active");
}

//phone menu after clicked menu close and navbut static animation 
var phoneMenuList = $(".mirror_phone_menu_list li")
for (var phoneNavMenuCount = 0; phoneNavMenuCount < $(".mirror_phone_menu_list li").length; phoneNavMenuCount++) {
    phoneMenuList[phoneNavMenuCount].onclick = function () {
        phoneNavMenu.classList.remove("mirror_phone_menu_active");
        ham.classList.remove("active");
    }
}


// mirror banner video change
var mirrorBannerSource = document.getElementById("mirror_banner_source");

var mirrorBannerSourceArray = [
    'https://player.vimeo.com/external/637210675.sd.mp4?s=d491d0b3c463e071ea7443e1c6fa1780c7cf7c25&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/530697028.sd.mp4?s=f52c20a4a996062c93d3c1c3c0f2330f89fa0460&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/progressive_redirect/playback/749766982/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=48791a3ff7e72f293a80610e1f2cc601c49fc0146b259e3b608c1794d8d1f46b',
    'https://player.vimeo.com/external/473959491.sd.mp4?s=3962e7dea76542382605f4bcb30d82809814bac2&profile_id=165&oauth2_token_id=57447761'
]

let SourceArrayLength = mirrorBannerSourceArray.length;

var mirrorBannerSourceRandom = Math.floor(Math.random() * SourceArrayLength);

mirrorBannerSource.src = mirrorBannerSourceArray[mirrorBannerSourceRandom];

// owl-carousel mirror scroller
if ($('.mirror_scroller').length > 0) {
    $('.mirror_scroller').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        smartSpeed: 500, //smooth effect
        autoplay: true, //smooth autoplya effect ><
        slideTransition: 'linear',
        autoplayTimeout: 10000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1020: {
                items: 3
            }
        }
    })
}


// owl-carousel partner
if ($('.partner_scroller').length > 0) {
    $('.partner_scroller').owlCarousel({
        loop: true,
        margin: 18,
        nav: false,
        dots: false,
        // smartSpeed: 1000, //smooth effect
        autoplay: true, //smooth autoplya effect ><
        slideTransition: 'linear',
        // autoplayTimeout: 10000,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1020: {
                items: 4
            }
        }
    })
}