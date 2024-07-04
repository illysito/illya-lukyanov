import { gsap } from 'gsap'

function hero_type() {
  function isMobile() {
    return window.innerWidth <= 478 // or use any threshold you consider as mobile
  }

  if (isMobile()) {
    console.log('Animations are disabled on mobile.') // Exit the function if on mobile
  } else {
    let swap_duration = 0
    let swap_delay = 1.2

    gsap.to('.soy-illy-wrapper', {
      opacity: 1,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
    gsap.to('.soy-illy-wrapper', {
      opacity: 0,
      delay: 1 * swap_delay,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
    gsap.to('.soy-illy-wrapper-en', {
      opacity: 1,
      delay: 1 * swap_delay,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
    gsap.to('.soy-illy-wrapper-en', {
      opacity: 0,
      delay: 2 * swap_delay,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
    gsap.to('.soy-illy-wrapper-arab', {
      opacity: 1,
      delay: 2 * swap_delay,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
    gsap.to('.soy-illy-wrapper-arab', {
      opacity: 0,
      delay: 3 * swap_delay,
      duration: swap_duration,
      repeat: -1,
      repeatDelay: 3 * swap_delay,
    })
  }
}

export default hero_type
