export default function ResumeSkillsCard({ skills }) {
    return (
        <div className="resume-skills-card">
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                ))}
            </div>
        </div>
    );
}