import { gsap } from 'gsap'

function contact_blocks() {
  const blocks = document.querySelectorAll('.contact-block')

  blocks.forEach((block) => {
    function animateBlock() {
      let random_op = Math.random()
      let actual_op = random_op <= 0.5 ? 0 : 1

      gsap.to(block, {
        opacity: actual_op,
        duration: 2,
        ease: 'power4.inOut',
        onComplete: animateBlock,
      })
    }
    animateBlock()
  })
}

export default contact_blocks
