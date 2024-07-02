import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function contacto() {
  console.log('haz algo')
  // gsap.to('.contacto-container', {
  //   scrollTrigger: {
  //     trigger: '.contacto-container',
  //     pin: '.contacto-container',
  //     pinSpacing: false,
  //     start: 'top top',
  //     end: () => '2000',
  //     scrub: 1,
  //     markers: false,
  //   },
  // })
}

export default contacto
