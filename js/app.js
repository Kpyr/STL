gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// var typingEffect = new Typed(".multiText",{
//     strings:["coder","engineer","designer","creator"],
//     loop:true,
//     typeSpeed:100,
//     backSpeed:80,
//     backDelay: 1500,
// })



if (ScrollTrigger.isTouch == 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper__main',
        content: '.content__main',
        smooth: 1.5,
        effects: true
    })


    gsap.fromTo('.logo', { scale:1, y:0 }, {
        scale: 0.15,
        y:-200,
        scrollTrigger: {
            trigger: '.header',
            start: 'top',
            end: '500',
            scrub: true
        }
    })
    gsap.fromTo('.scroll__down', { opacity:1 }, {
        opacity:0,
        scrollTrigger: {
            trigger: '.header',
            start: 'top',
            end: '300',
            scrub: true
        }
    })
    gsap.fromTo('.hd', {x:-200 }, {
        x:0,
        scrollTrigger: {
            trigger: '.hd',
            start: '-1100',
            end: '-100',
            scrub: true
        }
    })



    let about_txt_l = gsap.utils.toArray('.txt_l')
    about_txt_l.forEach(item => {
        gsap.fromTo(item, { opacity: 0.9, y:0 }, {
            opacity: 1, y:-400,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let about_txt_r = gsap.utils.toArray('.txt_r')
    about_txt_r.forEach(item => {
        gsap.fromTo(item, { opacity: 0.9, y:0 }, {
            opacity: 1, y:-400,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })
    let about_photos = gsap.utils.toArray('.photo')
    about_photos.forEach(item => {
        gsap.fromTo(item, { y: 50, opacity:1 }, {
            y: -1400, opacity:0,
            scrollTrigger: {
                trigger: item,
                start: '200',
                end: '800',
                scrub: true
            }
        })
    })


    gsap.fromTo('.hd_R', {x:200 }, {
        x:0,
        scrollTrigger: {
            trigger: '.hd_R',
            start: '-1100',
            end: '-100',
            scrub: true
        }
    })


    // gsap.fromTo('.about_mid', {y:-2000}, {
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: '.about_mid',
    //         start: '2000',
    //         end: '0',
    //         scrub: true
    //     }
    // })


    // let tmp_items = gsap.utils.toArray('.tmp > *')
    // tmp_items.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, y: -50 }, {
    //         opacity: 1, y: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-500',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })



    //
    // let tmp = gsap.utils.toArray('.projects')
    //
    // tmp.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, y: -50 }, {
    //         opacity: 1, y: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-600',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })
    //
    // let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    //
    // itemsL.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: -50 }, {
    //         opacity: 1, x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-850',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })
    //
    // let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    //
    // itemsR.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: 50 }, {
    //         opacity: 1, x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-750',
    //             end: 'top',
    //             scrub: true
    //         }
    //     })
    // })

}
