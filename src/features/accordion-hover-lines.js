import { gsap } from 'gsap'

function hover_lines() {
  const acc_head_elements = document.querySelectorAll('.accordion-header')

  acc_head_elements.forEach((header) => {
    const acc_head_line = header.querySelector('.lines')

    // Hover animation setup using GSAP
    header.addEventListener('mouseover', function () {
      gsap.to(acc_head_line, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
      })
    })
  })
}

export default hover_lines
