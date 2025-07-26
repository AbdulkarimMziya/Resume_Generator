import './styles/App.css'
import Resume from './components/Resume/Resume'
import PersonalDetails from './components/PersonalDetails.jsx'

function App() {
  return (
    <div className="app">
      <PersonalDetails />
      <Resume />
    </div>
  )
}

export default App
