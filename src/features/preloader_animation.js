import { gsap } from 'gsap'

function preloader_animation() {
  function isMobile() {
    return window.innerWidth <= 478 // or use any threshold you consider as mobile
  }

  if (isMobile()) {
    gsap.to('.preloader-counter-wrapper', {
      opacity: 0,
      delay: 3.5,
      duration: 1,
    })
    gsap.to('.preloader-overlay-mobile', {
      delay: 3.5,
      opacity: 0,
      ease: 'power4.inOut',
    })
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
