import './contact.css'
import { data } from '../data.js'
export const contactSectionTemplate = `
 <h3>CONTACT ME</h3>
<div class="contact-text-container"
  <p>Would you like to listen to the story when I flew away from a carrousel? </p>
  <ul>
    <li><a href="${data.contact[0].githubLink}"><img src="./public/assets/icons8-github-50.png" class="linkIcon"></img></a></li>
    <li><a href="tel:${data.contact[1].phone}"><img src="./public/assets/icons8-phone-50.png" class="linkIcon"></img></a></li>
    <li><a href="mailto:${data.contact[0].mail}"><img src="./public/assets/icons8-mail-50.png" class="linkIcon"></img></a></li>
  </ul>
</div>
`
