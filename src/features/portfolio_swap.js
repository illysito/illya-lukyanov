import { gsap } from 'gsap'

let animation_time = 0.7
let delay_time = 2 + animation_time

function swap_posters() {
  //INFINITY
  gsap.to('.suruba', {
    autoAlpha: 0,
    duration: animation_time,
    delay: 0 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 3 * delay_time,
  })
  gsap.to('.line-up', {
    autoAlpha: 0,
    duration: animation_time,
    delay: 1 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 3 * delay_time,
  })
  gsap.to('.line-up', {
    autoAlpha: 1,
    duration: animation_time,
    delay: 3 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 3 * delay_time,
  })
  gsap.to('.suruba', {
    autoAlpha: 1,
    duration: animation_time,
    delay: 2 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 3 * delay_time,
  })
  //YOP
  gsap.to('.yo', {
    autoAlpha: 0,
    duration: 1 * animation_time,
    delay: 0 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 2 * delay_time,
  })
  gsap.to('.yo', {
    autoAlpha: 1,
    duration: 1 * animation_time,
    delay: 1 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 2 * delay_time,
  })
  //BLANCO
  gsap.to('.marzo', {
    autoAlpha: 0,
    duration: animation_time,
    delay: 0 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
  gsap.to('.leer', {
    autoAlpha: 0,
    duration: animation_time,
    delay: 1 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
  gsap.to('.amanecer-rojo', {
    autoAlpha: 0,
    duration: animation_time,
    delay: 2 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
  gsap.to('.amanecer-rojo', {
    autoAlpha: 1,
    duration: animation_time,
    delay: 3 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
  gsap.to('.leer', {
    autoAlpha: 1,
    duration: animation_time,
    delay: 4 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
  gsap.to('.marzo', {
    autoAlpha: 1,
    duration: animation_time,
    delay: 5 * delay_time,
    ease: 'ease-inOut',
    repeat: -1,
    repeatDelay: 6 * delay_time,
  })
}

export default swap_posters
