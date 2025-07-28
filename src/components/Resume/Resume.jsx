import '../../styles/components/Resume.css';
import { experiencesList, projectsList, skillsList, educationList }  from '../../data/data.js';
import ResumeEducationCard from './ResumeEducationCard.jsx';
import ResumeExperienceCard from './ResumeExperienceCard.jsx';
import ResumeProjectCard from './ResumeProjectCard.jsx';
import ResumeSkillsCard from './ResumeSkillsCard.jsx';

export default function Resume(
    {
        name,
        email,
        linkedIn,
        github,
        portfolio
    }
) {
    
  return (
    <section className="resume">
        <section className="resume-personal-info">
            <h1>{name}</h1>
            <p><b>{email} | {linkedIn} | {github} | {portfolio}</b></p>
        </section>
        <section className="resume-experience-info">
            <h2>Experience</h2>
            {experiencesList.map((exp) => (
                <ResumeExperienceCard key={exp.id} experience={exp} />
            ))}
        </section>
        <section className="resume-projects-info">
            <h2>Projects</h2>
            {projectsList.map((project, index) => (
                <ResumeProjectCard key={index} project={project} />
            ))}
        </section>
        <section className="resume-skills-info">
            <h2>Skills</h2>
            <ResumeSkillsCard skills={skillsList} />
        </section>
        <section className="resume-education-info">
            <h2>Education</h2>
            {educationList.map((edu, index) => (
                <ResumeEducationCard key={index} education={edu} />
            ))}
        </section>

    </section>
  );
}