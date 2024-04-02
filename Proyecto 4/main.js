import './style.css'
import { data } from './data.js'
import { sliderTexts } from './data.js'

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

const navTemplate = `
  <a href=""><h3>Home</h3></a>
  <a href=""><h3>Who are you?</h3></a>
  <a href=""><h3>What have you studied?</h3></a>
  <a href=""><h3>Where have you worked?</h3></a>
  <a href=""><h3>How do I contact you?</h3></a>
`
const homeTemplate = `
  <div id="home-text-container">
    <h1>PORTFOLIO</h1>
    <div id="home-below-text-container">
      <h3>${data.name}</h3>
      <div id="sliderContainer"
      </div>
    </div>
  </div>

`
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

const modalSelector = document.body.getElementById('modal-selector')
