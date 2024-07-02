import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function portfolio_hero_parallax() {
  gsap.to('.w', {
    y: 200,
    scrollTrigger: {
      trigger: '.work-container',
      start: 'bottom 99%',
      scrub: 1,
    },
  })

  gsap.to('.o', {
    y: 150,
    scrollTrigger: {
      trigger: '.work-container',
      start: 'bottom 99%',
      scrub: 1,
      markers: false,
    },
  })

  gsap.to('.r', {
    y: 250,
    scrollTrigger: {
      trigger: '.work-container',
      start: 'bottom 99%',
      scrub: 1,
    },
  })

  gsap.to('.k', {
    y: 100,
    scrollTrigger: {
      trigger: '.work-container',
      start: 'bottom 99%',
      scrub: 1,
    },
  })

  gsap.to('.work-container', {
    y: -250,
    scrollTrigger: {
      trigger: '.work-container',
      start: 'bottom bottom',
      // endTrigger: '.accordion',
      end: () => '+=2000',
      scrub: 1,
      markers: false,
    },
  })

  gsap.to('.work-container-wrap', {
    // y: -250,
    scrollTrigger: {
      trigger: '.work-container-wrap',
      pin: '.work-container-wrap',
      pinSpacing: false,
      start: 'bottom bottom',
      // endTrigger: '.accordion',
      end: () => '+=7000',
      scrub: 1,
      markers: false,
    },
  })

  gsap.to('.lottie', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.work-container-wrap',
      start: 'top top',
      scrub: 1,
      markers: false,
    },
  })
}

export default portfolio_hero_parallax
