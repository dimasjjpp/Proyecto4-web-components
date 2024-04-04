import './style.css'
import { navTemplate } from './navbar/navbar.js'
import { homeTemplate } from './homeSection/home.js'
import { aboutMeTemplate } from './aboutmeSection/aboutme.js'
import { educationSectionTemplate } from './educationSection/education.js'
import { workSectionTemplate } from './workSection/work.js'
import { projectsHTML } from './projectsSection/projects.js'
import { contactSectionTemplate } from './contactSection/contact.js'

const nav = document.createElement('nav')
document.body.appendChild(nav)
nav.innerHTML += navTemplate

const main = document.createElement('main')
document.body.appendChild(main)
const mainSelector = document.body.querySelector('main')

const homeSection = document.createElement('section')
homeSection.id = 'home-section'
homeSection.innerHTML += homeTemplate
mainSelector.appendChild(homeSection)

const sectionAboutMe = document.createElement('section')
sectionAboutMe.id = 'aboutme'
sectionAboutMe.innerHTML += aboutMeTemplate
mainSelector.appendChild(sectionAboutMe)

const sectionEducation = document.createElement('section')
sectionEducation.id = 'education'
sectionEducation.innerHTML += educationSectionTemplate
mainSelector.appendChild(sectionEducation)

const sectionExperience = document.createElement('section')
sectionExperience.id = 'experience'
sectionExperience.innerHTML += workSectionTemplate
mainSelector.appendChild(sectionExperience)

const sectionProjects = document.createElement('section')
sectionProjects.id = 'projects'
sectionProjects.innerHTML += projectsHTML
mainSelector.appendChild(sectionProjects)

const sectionContact = document.createElement('section')
sectionContact.id = 'contact'
sectionContact.innerHTML += contactSectionTemplate
mainSelector.appendChild(sectionContact)
