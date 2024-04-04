import './home.css'
import { data } from '../data.js'
import { sliderTexts } from '../data.js'

export const homeTemplate = `
  <div id="home-text-container">
    <h1>PORTFOLIO</h1>
    <div id="home-below-text-container">
      <h3>${data.name}</h3>
      <div id="sliderContainer"
      </div>
    </div>
  </div>
`

{
  document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('sliderContainer') //ok
    sliderContainer.innerHTML = `${sliderTexts[0].content}`
    let index = 1
    function changeText() {
      sliderContainer.innerHTML = ''
      sliderContainer.innerHTML += sliderTexts[index].content
      index = (index + 1) % sliderTexts.length
    }
    setInterval(changeText, 4000)
  })
}
