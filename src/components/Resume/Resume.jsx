import '../../styles/components/Resume.css';
import ResumeEducationCard from './ResumeEducationCard.jsx';

export default function Resume() {
    let personalInfo = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
    };

    const education = 
    [
        {
            degreeLevel: "Bachelor Degree",
            fieldOfStudy: "Computer Science",
            institution: "Thompson Rivers University",
            location: "Kamloops, Canada",
            startDate: "Jan 2020",
            endDate: "Apr 2024"
        },
        {
            degreeLevel: "Diploma",
            fieldOfStudy: "Software Development",
            institution: "Thompson Rivers University",
            location: "Kamloops, Canada",
            startDate: "Jan 2018",
            endDate: "Apr 2020"
        }
    ]

  return (
    <section className="resume">
        <section className="resume-personal-info">
            <h1>{personalInfo.name}</h1>
            <p><b>{personalInfo.email} | {personalInfo.linkedIn} | {personalInfo.github}</b></p>
        </section>
        <section className="resume-education-info">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <ResumeEducationCard key={index} education={edu} />
            ))}
        </section>

    </section>
  );
}