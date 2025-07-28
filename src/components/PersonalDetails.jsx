
import PersonalDetailsForm from "./PersonalDetailsForm";
import "../styles/components/PersonalDetails.css";
import Experience from "./Experience/Experience";
import Project from "./Project/Project";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

export default function PersonalDetails(
  {
    name,
    email,
    linkedIn,
    github,
    portfolio,
    skills,
    experiences,
    projects,
    education,
    setName,
    setEmail,
    setLinkedIn,
    setGithub,
    setPortfolio,
    setSkills,
    setExperiences,
    setProjects,
    setEducation
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
      <Experience experiences={experiences} setExperiences={setExperiences} />
      <Project projects={projects} setProjects={setProjects} />
      <Skills skills={skills} setSkills={setSkills} />
      <Education education={education} setEducation={setEducation} />
    </section>
  );
}