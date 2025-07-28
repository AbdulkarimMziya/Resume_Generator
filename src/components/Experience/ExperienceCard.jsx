import '../../styles/components/PersonalDetails.css';

export default function ExperienceCard({ experience }) {
    return (
        <div className="experience-card">
            <h3 className="company-name">{experience.companyName}</h3>
            <p className="role">{experience.role}</p>
        </div>
    );
}
