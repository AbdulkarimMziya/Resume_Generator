export default function ResumeExperienceCard({ experience }) {
    return (
        <div className="resume-experience-card">
            <div className="experience-header">
                <h3>{experience.companyName}</h3>
                <h3>{experience.startDate} - {experience.endDate}</h3>
            </div>
            <div className="experience-details">
                <p>{experience.role}</p>
                <p>{experience.location}</p>
            </div>
            <div>
                <p>{experience.description}</p>
            </div>
        </div>
    );
}
