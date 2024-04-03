const data = {
  name: 'Dimas J. Poch',
  address: 'Somewhere in a rural area near Barcelona',
  email: 'dimasjimenezpoch@email.com',
  avatar: '',
  aboutMe:
    "Hi there, I'm Dimas. For almost my entire professional career, I've been involved in the construction sector due to family heritage. I've managed teams for nearly 7 years in various environments, including construction sites, exhibition booths, and the steel industry. After being curious about programming for many years and being discouraged by the limited opportunities in construction, I'm now studying to become a full stack developer.",
  education: {
    degree: 'Bootcamp',
    university: 'The powerMBA {Rock the Code}',
    graduationYear: 2024,
    honors: 'none',
    relevantCourses: [
      'Introduction to Programming',
      'Frontend Web Development',
      'Backend Web Development',
      'Application Deployment and Management',
      'Web Application Security',
      'Continuous Integration and Continuous Deployment (CI/CD)',
      'Microservices Architecture',
      'Mobile Application Development'
    ]
  },
  education1: {
    degree: "Bachelor's",
    university: 'Universitat Oberta de Catalunya',
    major: 'Marketing i investigació de mercats',
    graduationYear: 2019,
    relevantCourses: [
      'Marketing Strategy',
      'Consumer Behavior Analysis',
      'Market Research Methods',
      'Digital Marketing',
      'Social Media Marketing',
      'Brand Management',
      'Marketing Analytics',
      'International Marketing'
    ]
  },
  workExperience: [
    {
      position: 'Production Manager',
      company: 'ARFER',
      startDate: 'Feb 2020',
      endDate: 'Feb 2023',
      description:
        'As a Production Manager at ARFER, I successfully led the production of metal structures, focusing on process optimization and continuous improvement implementation, resulting in a significant increase in operational efficiency. I managed multidisciplinary teams, fostering skill development and a positive work environment, leading to higher team satisfaction and improved production outcomes. Additionally, I negotiated with suppliers, managed budgets, and ensured the delivery of high-quality projects within established timeframes and budgets. Responsibilities included:',
      keyResponsibilities: [
        'Industrialization of metal structures using Ferrawin software',
        'Managing and planning production actions, coordinating different work teams to ensure efficiency and meet objectives of deadlines, quality, costs, and safety.',
        'Planning work orders, resources, and delivery times',
        'Incident and deviation management',
        'Improvement processes and testing on production issues',
        'Stock control and analysis',
        'Quality control',
        'Logistics and materials reception',
        'Short, medium, and long-term improvement proposals',
        'Selection, negotiation, and hiring',
        'Training new operators',
        'Direct reporting and communication with management',
        'Preventive maintenance'
      ]
    },
    {
      position: 'Project Manager',
      company: 'COMPEIXALAIGUA DESIGNSTUDIO S.L.',
      startDate: 'Jan 2016',
      endDate: 'Mar 2018',
      description:
        'As a Project Manager at COMPEIXALAIGUA DESIGNSTUDIO S.L., I led projects comprehensively for fair stands and corporate interior designs, managing budgets and ensuring timely and efficient delivery. I collaborated closely with clients, contractors, and suppliers, ensuring effective communication and customer satisfaction. Additionally, I supervised assembly logistics, managed permits and supplier hiring to ensure successful project execution, coordinated multiple providers in assembly and installation, drafted assembly plans using Computer-Aided Design (CAD), and traveled approximately 30% of the time, coordinating activities in various locations throughout Europe.',
      keyResponsibilities: [
        'Comprehensive Project Management',
        'Interdepartmental Coordination',
        'Logistic Management',
        'Computer-Aided Design (CAD)',
        'International Mobility'
      ]
    }
  ],
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'RESTful API',
    'Git',
    'Frontend Development'
  ],
  projects: [
    {
      title: 'Pinterest Landing Page Copy',
      description: `Within the bootcamp, I have recreated the Pinterest landing page several times, applying the latest knowledge acquired. This time, the challenge was to build the page using the Unsplash API as the source for the images.`,
      link: 'https://sage-faloodeh-2e1aa6.netlify.app/'
    },
    {
      title: 'Filter Products',
      description: `As one of the exercises in the course, the objective of this project was to create a filter for products in a web shop. It has two active filters: one for the seller and one for the price range. The website I chose to replicate is called PC Componentes, a well-known tech seller in Spain.`,
      link: 'https://classy-kheer-e32945.netlify.app/'
    },
    {
      title: 'Portfolio Website',
      description: `well the web you're in`,
      link: 'http://github.com/#',
      preview: ''
    }
  ],
  contact: [
    { mail: 'dimasjimenezpoch@gmail.com' },
    {
      phone: '+34662416193'
    },
    {
      githubLink: 'https://github.com/dimasjjpp'
    }
  ]
}

export const sliderTexts = [
  {
    id: 'sliderText1',
    content: `<h5 id="text1">-"You've done a great job setting the table so fast"-</h5>
              <h6 id="text1-sub">-My grandma, november 1995-</h6>`
  },
  {
    id: 'sliderText2',
    content: `<h5 id="text2">-"A macaroni necklace?! That's so original"-</h5>
              <h6 id="text2-sub">-My mother, april 1993-</h6>`
  },
  {
    id: 'sliderText3',
    content: `<h5 id="text3">-"Do you live here?"-</h5>
              <h6 id="text3-sub">-Customer during COVID pandemic, may 2021-</h6>`
  }
]
export const navTemplate = `
  <a href="#home-section"><h4>Home</h4></a>
  <a href="#aboutme"><h4>Who are you?</h4></a>
  <a href="#education"><h4>What have you studied?</h4></a>
  <a href="#experience"><h4>Where have you worked?</h4></a>
  <a href="#projects"><h4>Whats you've done?</h4></a>
  <a href="#contact"><h4>How do I contact you?</h4></a>
`
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
export const aboutMeTemplate = `
<h3>ABOUT ME</h3>
<div id="aboutme-text-container">
  <p>${data.aboutMe}</p>
  <a id="modal-selector">That's me</a>
</div>
<div id="modal" class="displayNone">
  <div class="modal-container">
    <span id="close-modal">&times;</span>
    <div id="selfimage-link" class="">
      <img src="./public/assets/Arcadi.jpeg" alt="Dog image" />
    </div>
    <div id="modal-text-container"
    <p>Ops... that's my dog Arcadi</p>
    <a id="second-modal-selector">That's me..for real</a>
    </div>
  </div>
</div>
<div id="secondModalContainer" class="displayNone">
  <div class="modal-container">
    <span id="close-second-modal">&times;</span>
      <div id="second-selfimage-link">
        <img src="./public/assets/selfimg.jpg" alt="Dog image" />
        
      </div>
  </div>
</div>
`
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
