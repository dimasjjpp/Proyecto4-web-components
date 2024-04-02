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
      title: 'E-commerce Website',
      description:
        'Designed and developed a feature-rich e-commerce platform with advanced product search, user reviews, and a secure payment system, resulting in a 30% increase in sales for the client.',
      link: 'http://github.com/#',
      preview:
        'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&w=500'
    },
    {
      title: 'Blog Platform',
      description:
        'Created a customizable blog platform with dynamic content creation, user authentication, comment functionality, and social media integration, leading to a 50% growth in user engagement.',
      link: 'http://github.com/#',
      preview:
        'https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070'
    },
    {
      title: 'Portfolio Website',
      description:
        'Built a professional portfolio website to showcase my web development skills and projects. The site features a clean, responsive design and highlights my work as a developer.',
      link: 'http://github.com/#',
      preview: ''
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
  <a href=""><h3>Home</h3></a>
  <a href=""><h3>Who are you?</h3></a>
  <a href=""><h3>What have you studied?</h3></a>
  <a href=""><h3>Where have you worked?</h3></a>
  <a href=""><h3>How do I contact you?</h3></a>
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
<h3>ABOUT ME </h3>
<div id="aboutme-text-container">
  <p>${data.aboutMe}</p>
  <a id="modal-selector">that's me</a>
  <a href="#" id="selfimage-link" class="displayNone"
  ><img src="./public/assets/Arcadi.jpeg" alt="dogImage"
/></a>
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
