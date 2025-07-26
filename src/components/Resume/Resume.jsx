import '../../styles/components/Resume.css';
import ResumeEducationCard from './ResumeEducationCard.jsx';
import ResumeExperienceCard from './ResumeExperienceCard.jsx';
import ResumeProjectCard from './ResumeProjectCard.jsx';
import ResumeSkillsCard from './ResumeSkillsCard.jsx';

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

    ];

    const experience = [
        {
            companyName: "Tech Solutions Inc.",
            startDate: "Jan 2021",
            endDate: "Dec 2023",
            role: "Software Engineer",
            location: "Vancouver, Canada",
            description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented RESTful APIs and optimized application performance."
        },
        {
            companyName: "Amazon",
            startDate: "May 2019",
            endDate: "Dec 2020",
            role: "Frontend Developer",
            location: "Vancouver, Canada",
            description: "Worked on the frontend development of e-commerce platforms using HTML, CSS, and JavaScript. Improved user experience by implementing responsive design and accessibility features."
        }
    ];

    const projects = [
        {
            projectName: "Portfolio Website",
            startDate: "Jan 2023",
            endDate: "Mar 2023",
            technologies: "React, Node.js, MongoDB",
            link: "https://github.com/johndoe/portfolio",
            description: "Developed a personal portfolio website to showcase projects and skills. Implemented a responsive design and optimized performance."
        },
        {
            projectName: "E-commerce Application",
            startDate: "Apr 2023",
            endDate: "Jun 2023",
            technologies: "React, Redux, Express",
            link: "https://github.com/johndoe/e-commerce",
            description: "Developed a full-stack e-commerce application with user authentication, product management, and payment processing."
        }
    ];

    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "MongoDB",
        "Git",
        "RESTful APIs",
        "Agile Methodologies",
        "Problem Solving",
        "Team Collaboration",
        "Communication"
    ];

  return (
    <section className="resume">
        <section className="resume-personal-info">
            <h1>{personalInfo.name}</h1>
            <p><b>{personalInfo.email} | {personalInfo.linkedIn} | {personalInfo.github}</b></p>
        </section>
        <section className="resume-experience-info">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
                <ResumeExperienceCard key={index} experience={exp} />
            ))}
        </section>
        <section className="resume-projects-info">
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <ResumeProjectCard key={index} project={project} />
            ))}
        </section>
        <section className="resume-skills-info">
            <h2>Skills</h2>
            <ResumeSkillsCard skills={skills} />
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