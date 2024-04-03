import './style.css'
import { data } from './data.js'
import { sliderTexts } from './data.js'
import { navTemplate } from './data.js'
import { homeTemplate } from './data.js'
import { aboutMeTemplate } from './data.js'
import { educationSectionTemplate } from './data.js'

const nav = document.createElement('nav')
const main = document.createElement('main')
const homeSection = document.createElement('home')
homeSection.id = 'home-section'
const sectionAboutMe = document.createElement('section')
sectionAboutMe.id = 'aboutme'
const sectionEducation = document.createElement('section')
sectionEducation.id = 'education'
const sectionExperience = document.createElement('section')
sectionExperience.id = 'experience'
const sectionProjects = document.createElement('section')
sectionProjects.id = 'projects'

nav.innerHTML += navTemplate
document.body.appendChild(nav)

document.body.appendChild(main)

homeSection.innerHTML += homeTemplate
const mainSelector = document.body.querySelector('main')
mainSelector.appendChild(homeSection)
{
  const sliderContainer = document.getElementById('sliderContainer') //ok
  sliderContainer.innerHTML = `${sliderTexts[0].content}`
  let index = 1
  function changeText() {
    sliderContainer.innerHTML = ''
    sliderContainer.innerHTML += sliderTexts[index].content
    index = (index + 1) % sliderTexts.length

    console.log(index)
  }
  setInterval(changeText, 4000)
} //auto text slider

const modalSelector = document.getElementById('modal-selector')

sectionAboutMe.innerHTML += aboutMeTemplate
mainSelector.appendChild(sectionAboutMe)
