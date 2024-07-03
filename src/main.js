import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

import hover_lines from './features/accordion-hover-lines'
import swap_type from './features/menu'
import packaging_parallax from './features/packaging-parallax'
import accordion from './features/portfolio-accordion'
import portfolio_hero_parallax from './features/portfolio-hero-parallax'
import portfolio_life from './features/portfolio-life'
import swap_posters from './features/portfolio_swap'
import split_type from './features/split-type'

console.log('it works from github')

gsap.registerPlugin(ScrollTrigger)

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

// ------------------------------------------------------------ PACKAGING PARALLAX //

split_type()
