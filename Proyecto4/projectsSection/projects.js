import './projects.css'
import { data } from '../data.js'
const projectsTemplate = []
projectsTemplate.push(`<h3>PROJECTS</h3>`)

data.projects.forEach((project) => {
  let projectHTML = `
    <div id="projects-container">
      <p>${project.title}</p>
      <p>${project.description}</p>
      <a href="${project.link}">${project.link}</a>
    </div>`
  projectsTemplate.push(projectHTML)
})

export const projectsHTML = projectsTemplate.join('')
