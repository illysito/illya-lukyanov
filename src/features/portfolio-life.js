import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function portfolio_hero_parallax() {
  gsap.to('.w', {
    y: 150,
    scrollTrigger: {
      trigger: '.flex-1',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.o', {
    y: 100,
    scrollTrigger: {
      trigger: '.flex-1',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.r', {
    y: 200,
    scrollTrigger: {
      trigger: '.flex-1',
      start: 'top 99%',
      scrub: 1,
    },
  })

  gsap.to('.k', {
    y: 50,
    scrollTrigger: {
      trigger: '.flex-1',
      start: 'top 99%',
      scrub: 1,
    },
  })
}

export default portfolio_hero_parallax
