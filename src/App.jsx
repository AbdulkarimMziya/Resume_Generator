import './styles/App.css'
import { useState } from 'react'
import Resume from './components/Resume/Resume'
import PersonalDetails from './components/PersonalDetails.jsx'
import { experiencesList, projectsList, educationList, skillsList } from './data/data'

function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [linkedIn, setLinkedIn] = useState('https://www.linkedin.com/in/johndoe');
  const [github, setGithub] = useState('https://github.com/johndoe');
  const [portfolio, setPortfolio] = useState('https://johndoe.com');

  const [skills, setSkills] = useState(skillsList);
  const [experiences, setExperiences] = useState(experiencesList);
  const [projects, setProjects] = useState(projectsList);
  const [education, setEducation] = useState(educationList);

  return (
    <div className="app">
      <PersonalDetails
        name={name}
        email={email}
        linkedIn={linkedIn}
        github={github}
        portfolio={portfolio}
        skills={skills}
        experiences={experiences}
        projects={projects}
        education={education}
        setName={setName}
        setEmail={setEmail}
        setLinkedIn={setLinkedIn}
        setGithub={setGithub}
        setPortfolio={setPortfolio}
        setSkills={setSkills}
        setExperiences={setExperiences}
        setProjects={setProjects}
        setEducation={setEducation}
      />
      <Resume 
        name={name}
        email={email}
        linkedIn={linkedIn}
        github={github}
        portfolio={portfolio}
        skills={skills}
        experiences={experiences}
        projects={projects}
        education={education}
      />
    </div>
  )
}

export default App
