import { gsap } from 'gsap'

function preloader_animation() {
  function isMobile() {
    return window.innerWidth <= 478 // or use any threshold you consider as mobile
  }

  if (isMobile()) {
    console.log('mobile')
    // let complete = false
    // gsap.to('.preloader-counter-wrapper', {
    //   opacity: 0,
    //   delay: 3.5,
    //   duration: 1,
    // })
    // gsap.to('.preloader-overlay-mobile', {
    //   delay: 3.5,
    //   opacity: 0,
    //   ease: 'power4.inOut',
    //   onComplete: () => {
    //     complete = true
    //   },
    // })
    // if (complete) {
    //   document.querySelector('.preloader-counter-wrapper').style.visibility =
    //     'hidden'
    //   document.querySelector('.preloader-overlay-mobile').style.visibility =
    //     'hidden'
    // }
  } else {
    gsap.to('.preloader-counter-wrapper', {
      opacity: 0,
      delay: 3.5,
      duration: 1,
    })
    gsap.to('.preload-layer', {
      delay: 3.5,
      opacity: 0,
      stagger: {
        amount: 0.9,
        from: 'random',
      },
      ease: 'power4.inOut',
    })
  }
}

export default preloader_animation
