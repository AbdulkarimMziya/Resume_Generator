import './styles/App.css'
import { useState } from 'react'
import Resume from './components/Resume/Resume'
import PersonalDetails from './components/PersonalDetails.jsx'

function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [linkedIn, setLinkedIn] = useState('https://www.linkedin.com/in/johndoe');
  const [github, setGithub] = useState('https://github.com/johndoe');
  const [portfolio, setPortfolio] = useState('https://johndoe.com');
  return (
    <div className="app">
      <PersonalDetails
        name={name}
        email={email}
        linkedIn={linkedIn}
        github={github}
        portfolio={portfolio}
        setName={setName}
        setEmail={setEmail}
        setLinkedIn={setLinkedIn}
        setGithub={setGithub}
        setPortfolio={setPortfolio}
      />
      <Resume />
    </div>
  )
}

export default App
