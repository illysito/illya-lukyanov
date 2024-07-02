import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function packaging_parallax() {
  gsap.to('.llanten-2-pic', {
    y: -40,
    scrollTrigger: {
      trigger: '.llanten-wrapper',
      start: 'top 90%',
      scrub: 1,
    },
  })
  gsap.to('.llanten-pic', {
    y: -70,
    scrollTrigger: {
      trigger: '.llanten-wrapper',
      start: 'top 90%',
      scrub: 1,
    },
  })
  gsap.to('.llanten-pic-2', {
    y: -100,
    scrollTrigger: {
      trigger: '.llanten-wrapper',
      start: 'top 95%',
      scrub: 1,
    },
  })
  gsap.to('.los-lirios-2', {
    y: -40,
    scrollTrigger: {
      trigger: '.lirios-wrapper',
      start: 'top 90%',
      scrub: 1,
    },
  })
  gsap.to('.los-lirios-1', {
    y: -80,
    scrollTrigger: {
      trigger: '.lirios-wrapper',
      start: 'top 90%',
      scrub: 1,
    },
  })
}

export default packaging_parallax
