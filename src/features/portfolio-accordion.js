import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function accordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header')
  // const logosWrapper = document.querySelectorAll('.content-wrapper-logos')

  // Debugging: Check if accordion headers are selected
  console.log('Accordion Headers:', accordionHeaders)
  console.log('hey')

  accordionHeaders.forEach((header) => {
    const content = header.nextElementSibling
    const icon = header.querySelector('.accordion-icon-wrap')
    const heading = header.querySelector('.accordion-heading')

    gsap.set(content, { height: 'auto' })
    gsap.set(content, { height: 0 })

    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('open')

      if (isOpen) {
        gsap.to(heading, {
          x: 0,
          duration: 0.5,
          ease: 'ease-in',
        })
        gsap.to(content, {
          height: 0,
          duration: 0.7,
          ease: 'ease-in',
          // onComplete: () => {
          //   ScrollTrigger.refresh()
          // },
        })
        // gsap.to(logosWrapper, {
        //   height: 0,
        //   duration: 0,
        // })
        gsap.to(icon, {
          rotation: 0,
          duration: 1,
          ease: 'ease-in',
        })
      } else {
        gsap.to(heading, {
          x: 50,
          duration: 0.5,
          ease: 'ease-in',
        })
        gsap.to(content, {
          height: 'auto',
          duration: 0.7,
          ease: 'ease-in',
          // onComplete: () => {
          //   ScrollTrigger.refresh()
          // },
        })
        gsap.to(icon, {
          rotation: 45,
          duration: 1,
          ease: 'ease-in',
        })
      }
      header.classList.toggle('open')
      // ScrollTrigger.refresh()
    })
  })
}

export default accordion
