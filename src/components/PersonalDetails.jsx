
import PersonalDetailsForm from "./PersonalDetailsForm";
import "../styles/components/PersonalDetails.css";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import { experiencesList, projectsList, educationList, skillsList } from "../data/data";

export default function PersonalDetails(
  {
    name,
    email,
    linkedIn,
    github,
    portfolio,
    setName,
    setEmail,
    setLinkedIn,
    setGithub,
    setPortfolio
  }
) {
  return (
    <section className="personal-details">
      <PersonalDetailsForm
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
      <Experience experiences={experiencesList} />
      <Project projects={projectsList} />
      <Skills skills={skillsList} />
      <Education education={educationList} />
    </section>
  );
}