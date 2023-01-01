gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
tl.from('.hero .rect', {
    opacity: 0,
    y: '-50%',
    duration: 2,
    ease: Power4.easeOut,
    delay: 0.5
})
.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2
}, '-=1.5')
.from('.hero img, .hero .circle', {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1
}, '-=1.5');

gsap.from('.transition1', {
    scrollTrigger: {
        trigger: '.transition1',
        start: 'top bottom'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3
});

let numProjects = 6;

// left-facing projects

for(let i = 1; i <= 6; i++) {

    let tran2x = (i % 2 == 1 ? -50 : 50),
        tran3x = (i % 2 == 1 ? 50 : -50);

    gsap.from(`.project:nth-of-type(${i}) .transition2`, {
        scrollTrigger: {
            trigger: `.project:nth-of-type(${i}) .transition2`,
            start: 'top bottom',
        },
        x: tran2x,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3        
    });

    gsap.from(`.project:nth-of-type(${i}) .transition3`, {
        scrollTrigger: {
            trigger: `.project:nth-of-type(${i}) .transition3`,
            start: 'top bottom',
        },
        x: tran3x,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3
    });
}

// gsap.from('.project.left .transition2', {
//     scrollTrigger: {
//         trigger: '.project.left .transition2',
//         start: 'top bottom',
//         onEnter: () => console.log('.project.left .transition2')
//     },
//     x: -50,
//     opacity: 0,
//     duration: 1.2,
//     stagger: 0.3
// });

// gsap.from('.project.left .transition3', {
//     scrollTrigger: {
//         trigger: '.project.left .transition3',
//         start: 'top bottom',
//         onEnter: () => console.log('.project.left .transition3')
//     },
//     x: 50,
//     opacity: 0,
//     duration: 1.2,
//     stagger: 0.3
// });

// gsap.from('.project.right .transition2', {
//     scrollTrigger: {
//         trigger: '.project.right .transition2',
//         start: 'top bottom',
//         onEnter: () => console.log('.project.right .transition2')
//     },
//     x: 50,
//     opacity: 0,
//     duration: 1.2,
//     stagger: 0.3
// });

// gsap.from('.project.right .transition3', {
//     scrollTrigger: {
//         trigger: '.project.right .transition3',
//         start: 'top bottom',
//         onEnter: () => console.log('.project.right .transition3')
//     },
//     x: -50,
//     opacity: 0,
//     duration: 1.2,
//     stagger: 0.3
// });