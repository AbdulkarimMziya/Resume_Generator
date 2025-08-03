import '../../styles/components/PersonalDetails.css';

export default function ExperienceCard({ experience, index, onEdit, onDelete }) {
    const handleCardClick = () => {
        onEdit(index);
    };

    return (
        <div className="experience-card" onClick={handleCardClick}>
            <h3 className="company-name">{experience.companyName}</h3>
            <p className="role">{experience.role}</p>
        </div>
    );
}
