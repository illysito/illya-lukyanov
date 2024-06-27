import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function portfolio_hero_parallax() {
  gsap.to('.work-container', {
    y: -250,
    scrollTrigger: {
      trigger: '.accordion',
      pin: '.work-container',
      pinSpacing: false,
      start: 'top bottom',
      end: () => '2000',
      scrub: 1,
    },
  })

  gsap.to('.w', {
    y: 200,
    scrollTrigger: {
      trigger: '.accordion',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.o', {
    y: 150,
    scrollTrigger: {
      trigger: '.accordion',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.r', {
    y: 250,
    scrollTrigger: {
      trigger: '.accordion',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.k', {
    y: 100,
    scrollTrigger: {
      trigger: '.accordion',
      start: 'top 99%',
      scrub: 1,
    },
  })
}

export default portfolio_hero_parallax
