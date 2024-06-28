import { gsap } from 'gsap'

let swap_duration = 0
let swap_delay = 0.25

function swap_type() {
  // gsap.to('.metronome', {
  //   opacity: 1,
  //   duration: swap_duration,
  //   repeat: -1,
  //   repeatDelay: swap_delay,
  // })
  // gsap.to('.metronome', {
  //   opacity: 0,
  //   duration: swap_duration,
  //   delay: 0.5 * swap_delay,
  //   repeat: -1,
  //   repeatDelay: swap_delay,
  // })
  // WORK
  gsap.to('.work-1', {
    opacity: 1,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-1', {
    opacity: 0,
    delay: 4 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-2', {
    opacity: 1,
    delay: 4 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-2', {
    opacity: 0,
    delay: 6 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-3', {
    opacity: 1,
    delay: 6 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-3', {
    opacity: 0,
    delay: 9 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-2', {
    opacity: 1,
    delay: 9 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-2', {
    opacity: 0,
    delay: 12 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-3', {
    opacity: 1,
    delay: 12 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.work-3', {
    opacity: 0,
    delay: 14 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })

  // CONTACTO
  gsap.to('.contacto-3', {
    opacity: 1,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-3', {
    opacity: 0,
    delay: 2 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-1', {
    opacity: 1,
    delay: 2 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-1', {
    opacity: 0,
    delay: 5 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-2', {
    opacity: 1,
    delay: 5 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-2', {
    opacity: 0,
    delay: 7 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-3', {
    opacity: 1,
    delay: 7 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-3', {
    opacity: 0,
    delay: 11 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-2', {
    opacity: 1,
    delay: 11 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-2', {
    opacity: 0,
    delay: 13 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  gsap.to('.contacto-3', {
    opacity: 1,
    delay: 13 * swap_delay,
    duration: swap_duration,
    repeat: -1,
    repeatDelay: 14 * swap_delay,
  })
  // gsap.to('.contacto-3', {
  //   opacity: 0,
  //   delay: 14 * swap_delay,
  //   duration: swap_duration,
  //   repeat: -1,
  //   repeatDelay: 14 * swap_delay,
  // })
}

export default swap_type
