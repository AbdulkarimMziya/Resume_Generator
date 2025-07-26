import '../../styles/components/Resume.css';

export default function Resume() {
    let personalInfo = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
    };

  return (
    <section className="resume">
        <section className="resume-personal-info">
            <h1>{personalInfo.name}</h1>
            <p><b>{personalInfo.email} | {personalInfo.linkedIn} | {personalInfo.github}</b></p>
        </section>
      <p>This is where the resume content will be displayed.</p>
    </section>
  );
}