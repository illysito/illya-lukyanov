import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function split_type() {
  const splitTypes = document.querySelectorAll('.soy-illy-p')

  splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: 'chars' })

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 65%',
        end: () => '+=1000',
        scrub: 1,
        markers: false,
      },
      opacity: 0,
      stagger: 0.1,
    })
  })
}

export default split_type
