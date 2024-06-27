import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'
import portfolio_hero_parallax from './features/portfolio-life'

gsap.registerPlugin(ScrollTrigger)

// ------------------------------------------------------------ PORTFOLIO LIFE IMAGES

const imgElements = document.querySelectorAll('.img')

// Filter elements where 'img' is the second class
const filteredElements = Array.from(imgElements).filter((element) => {
  const classList = element.className.split(' ')
  return classList[1] === 'img' // Check if the second class is 'img'
})

function scaledown_portfolio_img(event) {
  // Apply GSAP animations to the clicked element
  gsap.to(event.target, {
    scale: 0.99,
  })
}

function scaleup_portfolio_img(event) {
  // Apply GSAP animations to the clicked element
  gsap.to(event.target, {
    scale: 1,
  })
}

filteredElements.forEach((element) => {
  element.addEventListener('mouseenter', scaledown_portfolio_img)
  element.addEventListener('mouseleave', scaleup_portfolio_img)
})

// ------------------------------------------------------------ PORTFOLIO PARALLAX //

portfolio_hero_parallax()
