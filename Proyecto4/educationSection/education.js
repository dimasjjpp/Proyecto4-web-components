import './education.css'
import { data } from '../data.js'
export const educationSectionTemplate = `
  <h3>EDUCATION</h3>
  <div class="educationTextContainer">
    
    <p>${data.education.degree}</p>
    <p>${data.education.university}</p>
    <p>${data.education.graduationYear}</p>
 
  <div id="relevant-courses">
    <p>Relevant Courses:<p>
    <ul>
      ${data.education.relevantCourses}
    </ul>
  </div>
  </div>
  <div class="educationTextContainer">
    <p>${data.education1.degree}</p>
    <p>${data.education1.university}</p>
    <p>${data.education1.major}</p>
    <p>${data.education1.graduationYear}</p>
    <div id="relevant-courses">
        <p>Relevant Courses:<p>
    <ul>
      ${data.education1.relevantCourses}
    </ul>
    </div>
  </div>
  `
