import './work.css'
import { data } from '../data.js'
const provisionalExpWork = [`<h3>WORK EXPERIENCE</h3>`]
data.workExperience.forEach((exp) => {
  let workexp = `
  <div id="work-exp">
  <p>${exp.position}</p>
  <p>${exp.company}</p>
  <p>${exp.startDate} to ${exp.endDate}</p>
  <p>${exp.description}</p>
  </div>
`
  provisionalExpWork.push(workexp)
})
export const workSectionTemplate = provisionalExpWork.join('')
