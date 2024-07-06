import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

import hover_lines from './features/accordion-hover-lines'
import hero_type from './features/hero'
import swap_type from './features/menu'
import packaging_parallax from './features/packaging-parallax'
import accordion from './features/portfolio-accordion'
import portfolio_hero_parallax from './features/portfolio-hero-parallax'
import portfolio_life from './features/portfolio-life'
import swap_posters from './features/portfolio_swap'
import preloader_count from './features/preloader'
import preloader_animation from './features/preloader_animation'
import split_type from './features/split-type'

console.log('it works from github')

gsap.registerPlugin(ScrollTrigger)

// ------------------------------------------------------------ HERO TYPE

hero_type()
function init() {
  // Check if the preloader has been shown before
  const preloaderShown = localStorage.getItem('preloaderShown')

  if (!preloaderShown) {
    // Show the preloader if it hasn't been shown before
    document.querySelector('.preloader-counter-wrapper').style.display = 'flex'
    document.querySelector('.preloader-overlay-desktop').style.display = 'flex'
    document.querySelector('.preloader-overlay-mobile').style.display = 'flex'
    preloader_count()
    preloader_animation()
  } else {
    // Hide the preloader if it has been shown before
    document.querySelector('.preloader-counter-wrapper').style.display = 'none'
    document.querySelector('.preloader-overlay-desktop').style.display = 'none'
    document.querySelector('.preloader-overlay-mobile').style.display = 'none'
  }
}
init()

// ------------------------------------------------------------ PORTFOLIO LIFE IMAGES

swap_posters()
portfolio_life()

// ------------------------------------------------------------ PORTFOLIO PARALLAX //

portfolio_hero_parallax()

// ------------------------------------------------------------ PORTFOLIO ACCORDION //

accordion()
hover_lines()

// ------------------------------------------------------------ MENU TYPE //

swap_type()

// ------------------------------------------------------------ PACKAGING PARALLAX //

packaging_parallax()

// ------------------------------------------------------------ SPLT TYPE //

split_type()
